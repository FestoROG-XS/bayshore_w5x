import fs from 'fs';
const colors = require('colors');

export interface ConfigFile {
    shopName: string;
    shopNickname: string;
    regionName: string;
    serverIp?: string;
    placeId: string;
    country: string;
    regionId: number;
    reqHeadersShow: boolean;
    enableDebugLog: boolean;
    revisionLimit: number;

    // Game Options
    // 0: Do Not Shutdown
    // >0: Shutdown time as TimeStamp
    teamShutdown: number;

    unix?: UnixOptions;
    notices?: string[];
    sentryDsn?: string;
}

export interface UnixOptions {
    setuid: number;
    setgid: number;
}

export class Config {
    private static cfg: ConfigFile;

    static load() {
        console.log(`${colors.white(`CONFIG FILE:`)} ${colors.green('OK')}`);
        let cfg = fs.readFileSync('./config.json', 'utf-8');
        let json = JSON.parse(cfg);
        this.cfg = json as ConfigFile;
    }

    static getConfig(): ConfigFile {
        if (!this.cfg)
            this.load();
        
        return this.cfg;
    }
}