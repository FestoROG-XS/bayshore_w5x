import bodyParser from "body-parser";
import { Application } from "express";
import { unzipSync } from "zlib";
import { Module } from "./module";
import iconv from "iconv-lite";
import { Config } from "./config";
import { debugLog, exceptionLog, normalLog } from "./utils/logger";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const colors = require('colors');

// TODO: Move this into the config
const STARTUP_URI = `https://${Config.getConfig().serverIp || "localhost"}:9002`;
const STARTUP_HOST = `${Config.getConfig().serverIp || "localhost"}:9002`;

export default class AllnetModule extends Module {
    register(app: Application): void {
        app.use(bodyParser.raw({
            type: '*/*'
        }));

        app.use("/sys/servlet/PowerOn", function (req, res, next) {

            if (req.method !== "POST") {
                return res.status(405).end();
            }

            if (!req.is("application/x-www-form-urlencoded")) {
                return next();
            }

            const base64 = req.body.toString('ascii');
            const zbytes = Buffer.from(base64, "base64");
            const bytes = unzipSync(zbytes);
            const str = bytes.toString("ascii").trim();

            const kvps = str.split("&");
            const reqParams: any = {};

            // Keys and values are not URL-escaped

            kvps.forEach(kvp => {
                const [key, val] = kvp.split("=");

                reqParams[key] = val;
            });

            const send_ = res.send;

            req.body = reqParams;

            res.send = resParams => {
                const str =
                    Object.entries(resParams)
                        .map(([key, val]) => key + "=" + val)
                        .join("&") + "\n";

                res.set("content-type", "text/plain");

                const bin = iconv.encode(str, "UTF-8");

                return send_.apply(res, [bin]);
            };

            return next();
        });

        app.post("/sys/servlet/PowerOn", async (req, res) => {

            // Try to get paras

            let game_id = req.body.game_id || null;
            let ver = req.body.ver || null;
            let serial = req.body.serial || 'ABGN0000000';
            let ip = req.body.ip || null;
            let firm_ver = req.body.firm_ver || null;
            let boot_ver = req.body.boot_ver || null;
            let encode = req.body.encode || 'EUC-JP';
            let hops = parseInt(req.body.hops, 10) || -1; // 使用 parseInt 来转换为数字
            let format_ver = parseFloat(req.body.format_ver) || 1.00; // 使用 parseFloat 来转换为浮点数
            let token = req.body.token || '0';
            console.log(`${colors.cyan(`ALLNetID:${req.body.serial}, Via Game:${req.body.game_id}${req.body.ver}`)}`);
            debugLog(`${game_id}\n${ver}\n${serial}\n${ip}\n${firm_ver}\n${boot_ver}\n${encode}\n${hops}\n${format_ver}\n${token}`)
            // Cut milliseconds out of ISO timestamp
            const now = new Date();
            const adjusted = now;

            // 将这里转换为数据库形式，通过ABXX方式获取数据。
            try {
                let resParams;
                if (game_id == 'SBWJ' && ver == '5.00') {

                    let login = await prisma.placeEntry.findFirst({
                        where: {
                            ALLNetID: serial
                        }
                    })

                    if (login?.ALLNetID == null) {
                        normalLog(`Please assign an ALL.Net Router or NBLINE Router to the machine with ALL.Net Serial ${serial}!!`);
                        resParams = {
                            stat: -2, // Game Board Error
                            uri: "",
                            host: "",
                            place_id: '0000',
                            name: 'x',
                            nickname: 'X',
                            region0: "1",
                            region_name0: "X",
                            region_name1: "X",
                            region_name2: "Y",
                            region_name3: "Z",
                            country: "XXX",
                            allnet_id: "XXX",
                            timezone: "+08:00", // GMT+8 as CHN STD TIME
                            setting: "",
                            year: adjusted.getFullYear(),
                            month: adjusted.getMonth() + 1, // I hate JS
                            day: adjusted.getDate(),
                            hour: adjusted.getHours(),
                            minute: adjusted.getMinutes(),
                            second: adjusted.getSeconds(),
                            res_class: "PowerOnResponseVer2",
                            token: req.body.token,
                        };
                    } else {
                        resParams = {
                            stat: 1, // OK
                            uri: STARTUP_URI,
                            host: STARTUP_HOST,
                            place_id: login!.placeId,
                            name: login!.shopName,
                            nickname: login!.shopNickName,
                            region0: login!.regionId,
                            region_name0: login!.regionName,
                            region_name1: "X",
                            region_name2: "Y",
                            region_name3: "Z",
                            allnet_id: login!.placeId,
                            country: login!.country,
                            timezone: "+08:00", // GMT+8 as CHN STD TIME
                            setting: "",
                            year: adjusted.getFullYear(),
                            month: adjusted.getMonth() + 1, // I hate JS
                            day: adjusted.getDate(),
                            hour: adjusted.getHours(),
                            minute: adjusted.getMinutes(),
                            second: adjusted.getSeconds(),
                            res_class: "PowerOnResponseVer2",
                            token: req.body.token,
                        };
                    }
                } else {
                    resParams = {
                        stat: -1, // Game Type Error
                        uri: "",
                        host: "",
                        place_id: '0000',
                        name: 'x',
                        nickname: 'X',
                        region0: "1",
                        region_name0: "X",
                        region_name1: "X",
                        region_name2: "Y",
                        region_name3: "Z",
                        country: "XXX",
                        allnet_id: "XXX",
                        timezone: "+08:00", // GMT+8 as CHN STD TIME
                        setting: "",
                        year: adjusted.getFullYear(),
                        month: adjusted.getMonth() + 1, // I hate JS
                        day: adjusted.getDate(),
                        hour: adjusted.getHours(),
                        minute: adjusted.getMinutes(),
                        second: adjusted.getSeconds(),
                        res_class: "PowerOnResponseVer2",
                        token: req.body.token,
                    };
                }

                res.send(resParams);
            } catch(ex:any) {
                exceptionLog(ex,req)
            }
            
        });
    }
}