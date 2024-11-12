import { Application } from "express";
import { Module } from "module";

// Import Proto
import * as wm5 from "../wmmt/wm5.proto";
import { debugLog, exceptionLog, extractUserAgent, warnLog } from "../utils/logger";
import { PrismaClient } from "@prisma/client";

// Implement Useful objects
const eCode = wm5.wm5.protobuf.ErrorCode;
const helper = wm5.wm5.protobuf;
const prisma = new PrismaClient();

export default class ShopModule extends Module {
    register(app: Application): void {

        app.post('/method/load_shop_information', async(req,res) => {

            const decoder = wm5.wm5.protobuf.LoadShopInformationRequest;
            const encoder = wm5.wm5.protobuf.LoadShopInformationResponse;
            const reqContent = decoder.decode(req.body);

            try {
                const serial:string = extractUserAgent(req.rawHeaders)[1];

                let car = await prisma.car.findFirst({
                    where: {
                        carId: reqContent.carId
                    }
                })

                let shopItem = await prisma.shop.findMany();
                let items: wm5.wm5.protobuf.LoadShopInformationResponse.ShopItem[] = [];

                if(shopItem.length < 3) warnLog("Warning: Shop Items are less than 3, it may caused game crash!!!");

                for (let i = 0; i < shopItem.length; i++) {
                    items.push(wm5.wm5.protobuf.LoadShopInformationResponse.ShopItem.create({
                        category: shopItem[i].category,
                        itemId: shopItem[i].itemId,
                        price: shopItem[i].price,
                        discountPrice: shopItem[i].discountPrice,
                        recommended: shopItem[i].recommended,
                        isNew: (car!.shopGrade-1 <= shopItem[i].shopGrade)?true:false,
                        saleUntil: shopItem[i].saleUntil,
                        shopGrade: shopItem[i].shopGrade
                    }))
                }
                
                let resp;
                resp = encoder.encode({
                    error: eCode.ERR_SUCCESS,
                    items,
                    noticeUnlocked: true
                })

                res.header('Server', 'V388 Server')
                            .header('Cache-Control', 'no-cache')
                            .header('Keep-Alive', '300')
                            .header('Content-Type', 'application/x-protobuf; revision=3225')
                            .header('Content-Length', resp.finish().length.toString())
                            .status(200)
                            .send(Buffer.from(resp.finish()));


            } catch (ex:any) {
                exceptionLog(ex);
                res.status(503).send('NBGI Services Error');
            }


        })

    }
}