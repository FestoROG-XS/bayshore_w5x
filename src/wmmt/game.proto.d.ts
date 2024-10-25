import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace game. */
export namespace game {

    /** GID_AREA enum. */
    enum GID_AREA {
        GID_AREA_TOKYO = 0,
        GID_AREA_HAKONE = 1,
        GID_AREA_NAGOYA = 2,
        GID_AREA_OSAKA = 3,
        GID_AREA_FUKUOKA = 4,
        GID_AREA_SUBTOKYO_3_4 = 5,
        GID_AREA_SUBTOKYO_5 = 6,
        GID_AREA_TURNPIKE = 7,
        GID_AREA_KOBE = 8,
        GID_AREA_STORY = 9
    }

    /** GID_TACOURSE enum. */
    enum GID_TACOURSE {
        GID_TACOURSE_C1IN = 0,
        GID_TACOURSE_C1OUT = 1,
        GID_TACOURSE_RINGLEFT = 2,
        GID_TACOURSE_RINGRIGHT = 3,
        GID_TACOURSE_SUBTOKYO_3_4 = 4,
        GID_TACOURSE_SUBTOKYO_5 = 5,
        GID_TACOURSE_WANGANEAST = 6,
        GID_TACOURSE_WANGANWEST = 7,
        GID_TACOURSE_K1_DOWN = 8,
        GID_TACOURSE_K1_UP = 9,
        GID_TACOURSE_YAESUIN = 10,
        GID_TACOURSE_YAESUOUT = 11,
        GID_TACOURSE_YOKOHAMAIN = 12,
        GID_TACOURSE_YOKOHAMAOUT = 13,
        GID_TACOURSE_NAGOYA = 14,
        GID_TACOURSE_OSAKA = 15,
        GID_TACOURSE_KOBE = 16,
        GID_TACOURSE_FUKUOKA = 17,
        GID_TACOURSE_HAKONEFOR = 18,
        GID_TACOURSE_HAKONEBACK = 19,
        GID_TACOURSE_TURNPIKE_UP = 20,
        GID_TACOURSE_TURNPIKE_DOWN = 21,
        GID_TACOURSE_TOKYOALL = 22,
        GID_TACOURSE_KANAGAWAALL = 23
    }

    /** GID_RUNAREA enum. */
    enum GID_RUNAREA {
        GID_RUNAREA_C1 = 0,
        GID_RUNAREA_RING = 1,
        GID_RUNAREA_SUBTOKYO_3_4 = 2,
        GID_RUNAREA_SUBTOKYO_5 = 3,
        GID_RUNAREA_WANGAN = 4,
        GID_RUNAREA_K1 = 5,
        GID_RUNAREA_YAESU = 6,
        GID_RUNAREA_YOKOHAMA = 7,
        GID_RUNAREA_NAGOYA = 8,
        GID_RUNAREA_OSAKA = 9,
        GID_RUNAREA_KOBE = 10,
        GID_RUNAREA_FUKUOKA = 11,
        GID_RUNAREA_HAKONE = 12,
        GID_RUNAREA_TURNPIKE = 13,
        GID_RUNAREA_C1_REV = 14,
        GID_RUNAREA_OSAKA_REV = 15,
        GID_RUNAREA_HAKONE_REV = 16,
        GID_RUNAREA_C1_CLOSED = 17
    }

    /** GID_RAMP enum. */
    enum GID_RAMP {
        GID_RAMP_C1_IN_KANDABASHI = 0,
        GID_RAMP_C1_IN_SHIODOME = 1,
        GID_RAMP_C1_OUT_KANDABASHI = 2,
        GID_RAMP_C1_OUT_SHIBA = 3,
        GID_RAMP_RING_LEFT_ARIAKE = 4,
        GID_RAMP_RING_RIGHT_KIBA = 5,
        GID_RAMP_SUBTOKYO_SHIBUYA = 6,
        GID_RAMP_SUBTOKYO_GAIEN = 7,
        GID_RAMP_SUBTOKYO_DAIKANCHOU = 8,
        GID_RAMP_SUBTOKYO_SHINJUKU = 9,
        GID_RAMP_WANGAN_EAST_AIRPORT = 10,
        GID_RAMP_WANGAN_EAST_DAIKOKU = 11,
        GID_RAMP_WANGAN_WEST_RINKAI = 12,
        GID_RAMP_WANGAN_WEST_AIRPORT = 13,
        GID_RAMP_K1_DOWN_SHIBAURA = 14,
        GID_RAMP_K1_DOWN_HANEDA = 15,
        GID_RAMP_K1_UP_HANEDA = 16,
        GID_RAMP_K1_UP_SHIOIRI = 17,
        GID_RAMP_YAESU_SHIODOME = 18,
        GID_RAMP_YAESU_KYOBASHI = 19,
        GID_RAMP_YAESU_KANDABASHI = 20,
        GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA = 21,
        GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI = 22,
        GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA = 23,
        GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI = 24,
        GID_RAMP_NAGOYA_MARUNOUCHI = 25,
        GID_RAMP_OOSAKA_DOUTONBORI = 26,
        GID_RAMP_KOBE_SHINKOUCHOU = 27,
        GID_RAMP_KOBE_NADAOOHASHI = 28,
        GID_RAMP_FUKUOKA_WEST_MEIHAMA = 29,
        GID_RAMP_FUKUOKA_WEST_HAKATA = 30,
        GID_RAMP_FUKUOKA_EAST_NISHI = 31,
        GID_RAMP_FUKUOKA_EAST_HANDOUBASHI = 32,
        GID_RAMP_HAKONE_FOR = 33,
        GID_RAMP_HAKONE_BACK = 34,
        GID_RAMP_TURNPIKE_UP = 35,
        GID_RAMP_TURNPIKE_DOWN = 36
    }

    /** GID_TIMEZONE enum. */
    enum GID_TIMEZONE {
        GID_TIMEZONE_DAY = 0,
        GID_TIMEZONE_NIGHT = 1
    }

    /** GID_EXTREME enum. */
    enum GID_EXTREME {
        GID_EXTREME_NORMAL = 0,
        GID_EXTREME_REVERSE = 1
    }
}
