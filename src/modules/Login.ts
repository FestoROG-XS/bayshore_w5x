import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm5 from "../wmmt/wm5.proto";
import { debugLog, exceptionLog, extractUserAgent, normalLog, warnLog } from "../utils/logger";
import { PrismaClient } from "@prisma/client";
import { getCars, updateCarOrder } from "../utils/interfaces";
import { access } from "fs";

// Implement Useful objects
const eCode = wm5.wm5.protobuf.ErrorCode;
const helper = wm5.wm5.protobuf;
const prisma = new PrismaClient();

export default class LoginModule extends Module {
    register(app: Application): void {

        app.post('/method/load_user',async(req,res) => {

            // implement the helper
            const decoder = wm5.wm5.protobuf.LoadUserRequest;
            const encoder = wm5.wm5.protobuf.LoadUserResponse;
            const reqContent = decoder.decode(req.body);

            /**
             * NetAuth Must Match to User Id
             * If User Id Not Exists    -> Create User
             * If User Id Is Exists     -> Load User with chipId and accessCode
             * If got invalid card information && using weak login check,
             * use Dongle as login permission (not recommended)
             */

            try{
                let userStatus = helper.TransferState.NOT_REGISTERED;
                const serial:string = extractUserAgent(req.rawHeaders)[1];
                let SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: serial},
                            {TerminalUnitDongle: serial}
                        ]
                    }
                })
                // Check if I can find ALL.Net ID as auth, this step may not needed.
                if (SBWJPermission?.ALLNetID == null) userStatus = helper.TransferState.NOT_REGISTERED;
                if (SBWJPermission?.ALLNetID != null && SBWJPermission.UserId == null) userStatus = helper.TransferState.NEW_REGISTRATION;
                if (SBWJPermission?.ALLNetID != null && SBWJPermission.UserId != null) userStatus = helper.TransferState.TRANSFERRED;

                switch(userStatus) {
                    case (helper.TransferState.NOT_REGISTERED) : {
                        res.status(405).send('Invalid Operation');
                    } break;

                    case (helper.TransferState.NEW_REGISTRATION) : {
                        let user = await prisma.user.create({
                            data: {
                                chipId: reqContent.cardChipId,
                                accessCode: reqContent.accessCode
                            }
                        })
                        await prisma.placeEntry.update({
                            where: {
                                dbId: SBWJPermission!.dbId
                            },
                            data: {
                                UserId: user.userId
                            }
                        })
                        normalLog(`Registered New User via ${serial}, User ID is ${user.userId}`);

                        let resp = encoder.encode({
                            error: eCode.ERR_SUCCESS,
                            userId: user.userId,
                            maxiGold: 0,
                            totalMaxiGold: 0,
                            numOfOwnedCars: 0,
                            carStates: [],
                            carCoupon: helper.CarCreationCoupon.CAR_COUPON_NONE,
                            hp600Count: 0,
                            tutorials: 0,
                            membership: helper.WebsiteMembership.MEMBER_NON_MEMBER,
                            transferState: helper.TransferState.NOT_REGISTERED,
                            banacoinAvailable: false
                        })

                        res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));

                    } break;

                    case (helper.TransferState.TRANSFERRED) : {

                        // Will Load User Normally
                        let user = await prisma.user.findFirst({
                            where: {
                                    userId: SBWJPermission!.UserId!,
                                    accessCode: reqContent.accessCode,
                                    chipId: reqContent.cardChipId
                            }
                        })

                        if (user?.userId == null || user.userId == undefined) {
                            warnLog(`OpenBanapass Not Working!!! Using Serial to Login!!\n V388 Client -> ${reqContent.accessCode}`)
                            user = await prisma.user.findFirst({
                                where: {
                                    userId: SBWJPermission!.UserId!,
                                }
                            })
                        }

                        await updateCarOrder(user!.userId);

                        let cars = await getCars(user!.userId,SBWJPermission!.ALLNetID);

                        let carStates: wm5.wm5.protobuf.LoadUserResponse.ICarState[] = []
                        for (let i = 0 ; i < cars.length; i++) {
                            carStates.push(helper.LoadUserResponse.CarState.create({
                                hasOpponentGhost: false,
                                needToRename: false,
                                toBeDeleted: false,
                                eventJoined: false
                            }))
                        }

                        let tutorials = 0;
                        for (let i = 0 ; i < user!.tutorials.length; i++) 
                            tutorials += user!.tutorials[i];
                        

                        let resp;
                        resp = encoder.encode({
                            error: (user!.userBanned == true) ? eCode.ERR_ID_BANNED : eCode.ERR_SUCCESS,
                            userId: user!.userId,
                            maxiGold: user!.maxiGold,
                            totalMaxiGold: user!.maxiGold,
                            numOfOwnedCars: cars.length,
                            cars,
                            carStates,
                            carCoupon: helper.CarCreationCoupon.CAR_COUPON_NONE,
                            hp600Count: user!.hp600Count,
                            tutorials,
                            membership: user!.membership || 0,
                            transferState: helper.TransferState.TRANSFERRED,
                            totalVsMedalPoint: user!.totalVsMedalPoint || 0,
                            totalVsStarCount: user!.totalVsStarCount || 0
                        });

                        res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));

                    } break;

                    default: res.status(405).send('Invalid Operation');
                }

            } catch(ex:any) {
                exceptionLog(`${ex}\nIf User = NULL or UNDEFINDED, maybe the problem of OpenBanapass, please re-swipe the card`,req);
                res.status(500).send('NBGI Services Error');
            }

        })

        app.post('/method/load_drive_information', async(req,res) => {

            const encoder = wm5.wm5.protobuf.LoadDriveInformationResponse;
            try {
                
                let resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    noticeWindow: [],
                    noticeWindowMessage: [],
                    restrictedModels: []
                })

                res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));

            }catch (ex:any) {
                exceptionLog(ex,req);
                res.status(500).send('NBGI Services Error');
            }

        })

    }
}