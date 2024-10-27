import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm5 from "../wmmt/wm5.proto";
import { debugLog, exceptionLog, extractUserAgent, normalLog } from "../utils/logger";
import { PrismaClient } from "@prisma/client";
import { getCar, updateCarOrder } from "../utils/interfaces";
import Long from 'long';


// Implement Useful objects
const eCode = wm5.wm5.protobuf.ErrorCode;
const helper = wm5.wm5.protobuf;
const prisma = new PrismaClient();

export default class TerminalModule extends Module {
    register(app: Application): void {

        app.post('/method/load_terminal_information', async(req,res) => {

            // implement the helper
            const decoder = wm5.wm5.protobuf.LoadTerminalInformationRequest;
            const encoder = wm5.wm5.protobuf.LoadTerminalInformationResponse;
            const reqContent = decoder.decode(req.body);

            try {

                // Get user from serial
                const serial:string = extractUserAgent(req.rawHeaders)[1];
                let SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: serial},
                            {TerminalUnitDongle: serial}
                        ]
                    }
                })
                let user = await prisma.user.findFirst({
                    where: {
                        OR:[
                            {userId: reqContent.userId,},
                            {userId: SBWJPermission!.UserId!,}
                        ]
                    }
                })

                // Find MaxiGold
                let maxiGoldRewards = await prisma.maxiGoldRewards.findMany({
                    where: {
                        userId: user!.userId
                    }
                })

                // Find Prize
                let prize = await prisma.userItem.findMany({
                    where: {
                        userId: user!.userId,
                        OR:[
                            {category: 15},
                            {category: 18},
                            {category: 201}
                        ]
                    },
                })

                let resp;
                resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    teamNewsEntries: [],
                    applicants: [],
                    maxiGoldReceivable: (maxiGoldRewards.length>0),
                    prizeReceivable: (prize.length>0),
                    noticeEntries: [],
                    transferNotice: helper.TransferNotice.create({
                        needToRenameCar: false,
                        needToRenameTeam: false,
                        needToSeeTransferred: false
                    }),
                    announceFeature: false,
                    freeScratched: false
                })

            } catch(ex:any) {
                exceptionLog(`${ex}\nIf User = NULL or UNDEFINDED, maybe the problem of OpenBanapass, please re-swipe the card`,req);
                res.status(500).send('NBGI Services Error');
            }

        })

    }
}