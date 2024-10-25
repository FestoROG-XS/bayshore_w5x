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

export default class CarOperationModule extends Module {
    register(app: Application): void {

        app.post('/method/create_car', async(req,res) => {

            // implement the helper
            const decoder = wm5.wm5.protobuf.CreateCarRequest;
            const encoder = wm5.wm5.protobuf.CreateCarResponse;
            const reqContent = decoder.decode(req.body);

            try {
                const serial:string = extractUserAgent(req.rawHeaders)[1];
                const SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: serial},
                            {TerminalUnitDongle: serial}
                        ]
                    }
                })

                let user = await prisma.user.findFirst({
                    where: {
                        userId: SBWJPermission!.UserId!
                    }
                })

                let newCar = await prisma.car.create({
                    data: {
                        userId: SBWJPermission!.UserId!,
                        regionId: SBWJPermission!.regionId,
                        name: reqContent.car!.name!,
                        manufacturer: reqContent.car!.manufacturer!,
                        model: reqContent.car!.model!,
                        visualModel: reqContent.car!.visualModel!,
                        defaultColor: reqContent.car!.defaultColor!,
                        transmission: reqContent.transmission,
                        lastPlayedAt: reqContent.timestamp
                    }
                })

                normalLog(`Serial ${SBWJPermission?.ALLNetID} created a new car ${newCar.carId}`);

                // Unshift the car to the top
                await updateCarOrder(user!.userId,newCar.carId);

                let resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    userId: SBWJPermission!.UserId!,
                    carId: newCar.carId,
                    rgStamp: 0
                })

                res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));

            } catch (ex:any) {
                exceptionLog(ex,req);
                res.status(500).send('NBGI Services Error');
            }

        });

        app.post('/method/load_car', async(req,res) => {
            
            // implement the helper
            const decoder = wm5.wm5.protobuf.LoadCarRequest;
            const encoder = wm5.wm5.protobuf.LoadCarResponse;
            const reqContent = decoder.decode(req.body);

            try {

                const serial:string = extractUserAgent(req.rawHeaders)[1];
                const SBWJPermission = await prisma.placeEntry.findFirst({
                    where: {
                        OR:[
                            {DriveUnitDongle: serial},
                            {TerminalUnitDongle: serial}
                        ]
                    }
                })

                let car = await prisma.car.findFirst({
                    where: {
                        carId: reqContent.carId
                    }
                })

                await updateCarOrder(SBWJPermission!.UserId!,car!.carId);

                let basicCar = await getCar(reqContent.carId, SBWJPermission!.ALLNetID);

                const setting = wm5.wm5.protobuf.CarSetting.create({
                    ...car!
                }) 

                const specialAuraMotif = wm5.wm5.protobuf.SpecialAuraMotif.create({
                    auraMotif: car!.specialAuraMotif,
                    medalPoints: car!.specialAuraMotifMedalPoints
                })

                // TODO: TeamSystem
                let stLoseBits = Long.fromString(car!.stLoseBits.toString());
                debugLog(`${stLoseBits}`)

                let resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    ...car!,
                    car: basicCar!,
                    setting,
                    specialAuraMotif,
                    stLoseBits
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