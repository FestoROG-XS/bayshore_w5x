import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm5 from "../wmmt/wm5.proto";
import { debugLog, exceptionLog } from "../utils/logger";
import { debug } from "console";
import { PrismaClient } from "@prisma/client";
import { Config } from "../config";

// Implement Useful objects
const eCode = wm5.wm5.protobuf.ErrorCode;
const helper = wm5.wm5.protobuf;
const prisma = new PrismaClient();

export default class RegisterModule extends Module {
    register(app: Application): void {

        app.post('/method/register_system_info', async (req, res) => {
            
            // implement the helper
            const decoder = wm5.wm5.protobuf.RegisterSystemInfoRequest;
            const encoder = wm5.wm5.protobuf.RegisterSystemInfoResponse;
            const reqContent = decoder.decode(req.body);
            
            try{

                debugLog(`Base Type ${reqContent.pcbSerial} ${reqContent.terminalType} ${reqContent.romVersion}
                    Shop Info ${reqContent.country} ${reqContent.shopName} ${reqContent.shopNickname} 
                    ALLNet Info ${reqContent.allnetPlaceId} ${reqContent.allnetRegion0}
                    Mucha Info ${reqContent.muchaPlaceId} ${reqContent.muchaPrefectureId}
                    Region Info ${reqContent.regionName0}`);

                let SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: reqContent.pcbSerial},
                            {TerminalUnitDongle: reqContent.pcbSerial}
                        ]
                    }
                })

                let resp;

                // Permission NG
                if(SBWJPermission?.placeId == null || SBWJPermission.placeId == undefined || (Config.getConfig().revisionLimit == 0) ? false : (Config.getConfig().revisionLimit == reqContent.romVersion)) {
                    resp = encoder.encode({
                        error: eCode.ERR_BLOCK_CONNECTION,
                        teamSuspensionAnnouncementStartAt: 0,
                        teamSuspensionStartAt: 0,
                        regionId: 10,
                        placeId: "CHN------",
                        sendingReportPermitted: true,
                        ctrItemRestricted: false,
                        faceRecognitionPermitted: false,
                        featureVersion: helper.GameFeatureVersion.create({
                            year: 2024,
                            month: 10,
                            pluses: 0,
                            releaseAt: 0,
                            version: 0
                        })
                    });
                } else {
                    // TODO: Add up events
                    // Premission OK
                    resp = encoder.encode({
                        error: eCode.ERR_SUCCESS,
                        teamSuspensionAnnouncementStartAt: (Config.getConfig().teamShutdown == 0)? 2147483647 : Config.getConfig().teamShutdown,
                        teamSuspensionStartAt: (Config.getConfig().teamShutdown == 0)? 2147483647 : Config.getConfig().teamShutdown,
                        regionId: SBWJPermission!.regionId,
                        placeId: SBWJPermission!.placeId,
                        sendingReportPermitted: true,
                        ctrItemRestricted: false,
                        faceRecognitionPermitted: false,
                        featureVersion: helper.GameFeatureVersion.create({
                            year: 2024,
                            month: 10,
                            pluses: 0,
                            releaseAt: 0,
                            version: 0
                        }),
                        banacoinAffiliatedPlace: true,
                        banacoinAvailable: true,
                        scratchAvailable: false
                    });
                }

                res.header('Server', 'V388 Server')
                    .header('Cache-Control', 'no-cache')
                    .header('Keep-Alive', '300')
                    .header('Content-Type', 'application/x-protobuf; revision=3225')
                    .header('Content-Length', resp.finish().length.toString())
                    .status(200)
                    .send(Buffer.from(resp.finish()));

            } catch(ex:any) {
                exceptionLog(ex,req);
                res.status(503).send('NBGI Services Error');
            }

        });

        app.get('/resource/place_list', async(req,res) => {

            try{
                const SBWJPermission = await prisma.placeEntry.findMany();
                let resp;
                let places:wm5.wm5.protobuf.Place[] = [];
                for (let i = 0; i < SBWJPermission.length; i++) places.push(helper.Place.create({...SBWJPermission[i]}))
                
                resp = helper.PlaceList.encode({places});
                res.header('Server', 'V388 Server')
                    .header('Cache-Control', 'no-cache')
                    .header('Keep-Alive', '300')
                    .header('Content-Type', 'application/x-protobuf; revision=3225')
                    .header('Content-Length', resp.finish().length.toString())
                    .status(200)
                    .send(Buffer.from(resp.finish()));

            } catch(ex:any) {
                exceptionLog(ex,req); 
                res.status(503).send('NBGI Services Error');
            }

        });

        app.post('/method/update_user_lock', async (req, res) => {
            let resp = helper.UpdateUserLockResponse.encode({error: eCode.ERR_SUCCESS});
                res.header('Server', 'V388 Server')
                    .header('Cache-Control', 'no-cache')
                    .header('Keep-Alive', '300')
                    .header('Content-Type', 'application/x-protobuf; revision=3225')
                    .header('Content-Length', resp.finish().length.toString())
                    .status(200)
                    .send(Buffer.from(resp.finish()));
        });

        app.get('/resource/file_list', async (req, res) => {
            // TODO: Make it work
            let resp = helper.FileList.encode({files:[]});
                res.header('Server', 'V388 Server')
                    .header('Cache-Control', 'no-cache')
                    .header('Keep-Alive', '300')
                    .header('Content-Type', 'application/x-protobuf; revision=3225')
                    .header('Content-Length', resp.finish().length.toString())
                    .status(200)
                    .send(Buffer.from(resp.finish()));
        });

        app.post('/method/ping', async(req,res) => {

            let resp = helper.PingResponse.encode({
                error: eCode.ERR_SUCCESS,
                pong: Date.now(),
                bnidServerAvailable: true,
                banacoinAvailable: true
            });
                res.header('Server', 'V388 Server')
                    .header('Cache-Control', 'no-cache')
                    .header('Keep-Alive', '300')
                    .header('Content-Type', 'application/x-protobuf; revision=3225')
                    .header('Content-Length', resp.finish().length.toString())
                    .status(200)
                    .send(Buffer.from(resp.finish()));

        })

    }
}