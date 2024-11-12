import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm5 from "../wmmt/wm5.proto";
import { debugLog, exceptionLog, extractUserAgent, warnLog } from "../utils/logger";
import { PrismaClient } from "@prisma/client";
import { now } from "moment";
import { getCars } from "../utils/interfaces";

// Implement Useful objects
const eCode = wm5.wm5.protobuf.ErrorCode;
const helper = wm5.wm5.protobuf;
const prisma = new PrismaClient();

export default class TeamModule extends Module {
    register(app: Application): void {
    
        app.post('/method/create_team',async(req,res) => {

            // implement the helper
            const decoder = wm5.wm5.protobuf.CreateTeamRequest;
            const encoder = wm5.wm5.protobuf.CreateTeamResponse;
            const reqContent = decoder.decode(req.body);

            try{
                let teamExist = false;
                // Begin Req Data Check
                const serial:string = extractUserAgent(req.rawHeaders)[1];
                let SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: serial},
                            {TerminalUnitDongle: serial}
                        ]
                    }
                })

                // Loop Data Check
                const allTeam = await prisma.team.findMany();

                for(let i = 0; i < allTeam.length; i++) {
                    if (allTeam[i].teamName == reqContent.teamName) {teamExist = true;break;}
                }

                if (!teamExist) {
                    // Create Team
                const team = await prisma.team.create({
                    data: {
                        teamName: reqContent.teamName,
                        timestamp: reqContent.timestamp
                    }
                })

                // Set User Tag
                await prisma.user.update({
                    where: {
                        userId: reqContent.userId
                    },
                    data: {
                        teamId: 0,
                        teamStickerFont: 0
                    }
                })

                // Create Response
                let userCar = await getCars(reqContent.userId, SBWJPermission!.ALLNetID)

                const resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    team: helper.Team.create({
                        teamId: team.teamId,
                        name: reqContent.teamName,
                        numOfMembers: 1,
                        numOfMemberCars: userCar.length,
                        leaderUserId: reqContent.userId,
                        leaderCarName: userCar[0].name!,
                        leaderRegionId: SBWJPermission!.regionId,
                        stickerFont: 0,
                        fullfilled: false,
                        closed: false,
                        recruitmentSuspended: false,
                        createdAt: reqContent.timestamp,
                        homePlace: helper.Place.create({
                            placeId: SBWJPermission!.placeId,
                            regionId: SBWJPermission!.regionId,
                            country: SBWJPermission!.country,
                            shopName: SBWJPermission!.shopName
                        })
                    })
                })

                res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));
                } else {
                const resp = encoder.encode({
                    error: eCode.ERR_NAME_CONFLICTED,
                })

                res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));
                }
                


            } catch(ex: any) {
                exceptionLog(`${ex}`,req);
                res.status(503).send('NBGI Services Error');
            }


        })

    
    }
}