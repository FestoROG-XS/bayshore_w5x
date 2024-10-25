import { PrismaClient } from "@prisma/client";
import { wm5 } from "../wmmt/wm5.proto";
import { platform } from "os";
import { debugLog, exceptionLog } from "./logger";


const prisma = new PrismaClient();

export async function getCar(carId: number, netSerial: string) {

    let car = await prisma.car.findFirst({
        where: {
            carId: carId
        }
    })

    let permission = await prisma.placeEntry.findFirst({
        where: {
            ALLNetID: netSerial
        }
    })

    debugLog(`getCars: carId:${carId}`)

    try {
        const lastPlayedPlace = wm5.protobuf.Place.create({
            placeId: permission!.placeId,
            shopName: permission!.shopName,
            regionId: permission!.regionId,
            country: permission!.country
        })

        const gtWing = wm5.protobuf.GTWing.create({
            pillar: car!.pillar,
            pillarMaterial: car!.pillarMaterial,
            mainWing: car!.mainWing,
            mainWingColor: car!.mainWingColor,
            wingTip: car!.wingTip,
            material: car!.material
        })

        let miniStickers: wm5.protobuf.IMiniSticker[] = [];
        for (let i = 0; i < car!.miniSticker.length; i++) {
            miniStickers.push({
                miniSticker: car!.miniSticker[i],
                miniStickerColor: car!.miniStickerColor[i]
            })
        }

        return wm5.protobuf.Car.create({
            ...car!,
            gtWing,
            miniStickers,
            lastPlayedPlace
        })
    } catch (ex: any) {
        exceptionLog(`${ex}\n In $interface -> getCar() !`);
        return null;
    }

}


export async function getCars(userId: number, netSerial: string) {

    let user = await prisma.user.findFirst({
        where: {
            userId: userId
        }
    })

    let carOrder = user!.carOrder

    debugLog(`getCars: userId:${userId}, carsLength: ${carOrder}`)

    try {

        let cars: wm5.protobuf.ICar[] = [];

        for (let i = 0; i < carOrder.length; i++) {
            const car = await getCar(carOrder[i], netSerial);
            cars.push(car!);
        }

        return cars;

    } catch (ex: any) {
        exceptionLog(`${ex}\n In $interface -> getCars() !`);
        return [];
    }

}

export async function updateCarOrder(userId: number, carId?: number ) {
    try {
        let user = await prisma.user.findFirst({
            where: {
                userId: userId
            }
        });
    
        let cars = await prisma.car.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                carId: 'desc'
            }
        });
    
        debugLog(`OrigCarOrder: ${user?.carOrder}`);
    
        // 初始化新的车辆顺序
        let newCarOrder: number[] = [];
    
        if (!user || !user.carOrder || user.carOrder.length === 0) {
            newCarOrder = cars.map(car => car.carId);
            debugLog(`carOrder Re-Init: ${newCarOrder}`);
        } else {
            newCarOrder = [...user.carOrder];
        }
    
        if (carId) {
            const index = newCarOrder.indexOf(carId);
            if (index > -1) {
                newCarOrder.splice(index, 1);
            }
            newCarOrder.unshift(carId);
            debugLog(`carOrder updated: ${newCarOrder}`);
        } else {
            debugLog(`carOrder Not things to do: ${newCarOrder}`);
        }
        if (newCarOrder.length > 0 && (user?.carOrder || []).toString() !== newCarOrder.toString()) {
            await prisma.user.update({
                where: {
                    userId: userId
                },
                data: {
                    carOrder: newCarOrder
                }
            });
        }
    } catch (ex: any) {
        exceptionLog(`${ex}\n In $interface -> updateCarOrder() !`);
        return [];
    }
    
}