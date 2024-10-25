import { Config } from "../config";

const colors = require('colors');

export function formatDate(date: Date): string {
    const pad = (num: number) => String(num).padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // 月份从0开始
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export function extractUserAgent(data: any) {
    // 找到 User-Agent 的索引
    const userAgentIndex = (data.indexOf('User-Agent') !== -1)
                            ? data.indexOf('User-Agent')
                            : ((data.indexOf('user-agent') !== -1)
                            ? data.indexOf('user-agent')
                            : -1);
    const viaIndex = data.indexOf('Via');

    if (userAgentIndex !== -1) {
        // 获取 User-Agent 的值
        const userAgent = data[userAgentIndex + 1];

        // 提取独立的字符串
        const parts = userAgent.split(';');
        let serial;
        if (parts.length > 1) {
            serial = parts[1].trim();
        }

        // Check Version is avail
        // CHN 2676 5 X
        // EXP 2676 2 X
        // JPN 2764 X X
        const serialCheck = parseInt(serial.slice(0, 4), 10);
        if (serialCheck == 2676 || serialCheck == 2764) 
            return [userAgent, serial, (data.indexOf('Via') !== -1 ? colors.cyan(` ${data[viaIndex+1]}`): colors.yellow(' Maxi Terminal'))];
        else {
            warnLog('请不要尝试用W5X以外的版本连接至服务器\nPlease DO NOT CONNECT THE SERVER WITHOUT W5X!');
            return [null,null,null];
        }
    } else {
        warnLog(data);
        return [null,null,null]; // 如果没有找到 User-Agent，则返回 null
    }
}

export function debugLog(message:String) {
    if(Config.getConfig().enableDebugLog) console.log(`↑↑ -DEBUG-\n${message}\n-DEBUG-\n`);
}

export function warnLog(message:String) {
    console.log(`${colors.yellow(message)}\n`)
}

export function normalLog(message:String) {
    console.log(`${colors.cyan(message)}\n`)
}

export function exceptionLog(message:String,req?: any) {
    (req == null || req == undefined)? console.log(`${colors.red(`↑↑↑↑ EXCEPTION in Function or Interface ↑↑↑↑`)}\n${colors.red(`${message}\n`)}`)
    :console.log(`${colors.red(`↑↑↑↑ EXCEPTION in ${req.url} ↑↑↑↑`)}\n${colors.red(`${message}\n`)}`);
}