/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    /**
     * GID_AREA enum.
     * @name game.GID_AREA
     * @enum {number}
     * @property {number} GID_AREA_TOKYO=0 GID_AREA_TOKYO value
     * @property {number} GID_AREA_HAKONE=1 GID_AREA_HAKONE value
     * @property {number} GID_AREA_NAGOYA=2 GID_AREA_NAGOYA value
     * @property {number} GID_AREA_OSAKA=3 GID_AREA_OSAKA value
     * @property {number} GID_AREA_FUKUOKA=4 GID_AREA_FUKUOKA value
     * @property {number} GID_AREA_SUBTOKYO_3_4=5 GID_AREA_SUBTOKYO_3_4 value
     * @property {number} GID_AREA_SUBTOKYO_5=6 GID_AREA_SUBTOKYO_5 value
     * @property {number} GID_AREA_TURNPIKE=7 GID_AREA_TURNPIKE value
     * @property {number} GID_AREA_KOBE=8 GID_AREA_KOBE value
     * @property {number} GID_AREA_STORY=9 GID_AREA_STORY value
     */
    game.GID_AREA = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_AREA_TOKYO"] = 0;
        values[valuesById[1] = "GID_AREA_HAKONE"] = 1;
        values[valuesById[2] = "GID_AREA_NAGOYA"] = 2;
        values[valuesById[3] = "GID_AREA_OSAKA"] = 3;
        values[valuesById[4] = "GID_AREA_FUKUOKA"] = 4;
        values[valuesById[5] = "GID_AREA_SUBTOKYO_3_4"] = 5;
        values[valuesById[6] = "GID_AREA_SUBTOKYO_5"] = 6;
        values[valuesById[7] = "GID_AREA_TURNPIKE"] = 7;
        values[valuesById[8] = "GID_AREA_KOBE"] = 8;
        values[valuesById[9] = "GID_AREA_STORY"] = 9;
        return values;
    })();

    /**
     * GID_TACOURSE enum.
     * @name game.GID_TACOURSE
     * @enum {number}
     * @property {number} GID_TACOURSE_C1IN=0 GID_TACOURSE_C1IN value
     * @property {number} GID_TACOURSE_C1OUT=1 GID_TACOURSE_C1OUT value
     * @property {number} GID_TACOURSE_RINGLEFT=2 GID_TACOURSE_RINGLEFT value
     * @property {number} GID_TACOURSE_RINGRIGHT=3 GID_TACOURSE_RINGRIGHT value
     * @property {number} GID_TACOURSE_SUBTOKYO_3_4=4 GID_TACOURSE_SUBTOKYO_3_4 value
     * @property {number} GID_TACOURSE_SUBTOKYO_5=5 GID_TACOURSE_SUBTOKYO_5 value
     * @property {number} GID_TACOURSE_WANGANEAST=6 GID_TACOURSE_WANGANEAST value
     * @property {number} GID_TACOURSE_WANGANWEST=7 GID_TACOURSE_WANGANWEST value
     * @property {number} GID_TACOURSE_K1_DOWN=8 GID_TACOURSE_K1_DOWN value
     * @property {number} GID_TACOURSE_K1_UP=9 GID_TACOURSE_K1_UP value
     * @property {number} GID_TACOURSE_YAESUIN=10 GID_TACOURSE_YAESUIN value
     * @property {number} GID_TACOURSE_YAESUOUT=11 GID_TACOURSE_YAESUOUT value
     * @property {number} GID_TACOURSE_YOKOHAMAIN=12 GID_TACOURSE_YOKOHAMAIN value
     * @property {number} GID_TACOURSE_YOKOHAMAOUT=13 GID_TACOURSE_YOKOHAMAOUT value
     * @property {number} GID_TACOURSE_NAGOYA=14 GID_TACOURSE_NAGOYA value
     * @property {number} GID_TACOURSE_OSAKA=15 GID_TACOURSE_OSAKA value
     * @property {number} GID_TACOURSE_KOBE=16 GID_TACOURSE_KOBE value
     * @property {number} GID_TACOURSE_FUKUOKA=17 GID_TACOURSE_FUKUOKA value
     * @property {number} GID_TACOURSE_HAKONEFOR=18 GID_TACOURSE_HAKONEFOR value
     * @property {number} GID_TACOURSE_HAKONEBACK=19 GID_TACOURSE_HAKONEBACK value
     * @property {number} GID_TACOURSE_TURNPIKE_UP=20 GID_TACOURSE_TURNPIKE_UP value
     * @property {number} GID_TACOURSE_TURNPIKE_DOWN=21 GID_TACOURSE_TURNPIKE_DOWN value
     * @property {number} GID_TACOURSE_TOKYOALL=22 GID_TACOURSE_TOKYOALL value
     * @property {number} GID_TACOURSE_KANAGAWAALL=23 GID_TACOURSE_KANAGAWAALL value
     */
    game.GID_TACOURSE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_TACOURSE_C1IN"] = 0;
        values[valuesById[1] = "GID_TACOURSE_C1OUT"] = 1;
        values[valuesById[2] = "GID_TACOURSE_RINGLEFT"] = 2;
        values[valuesById[3] = "GID_TACOURSE_RINGRIGHT"] = 3;
        values[valuesById[4] = "GID_TACOURSE_SUBTOKYO_3_4"] = 4;
        values[valuesById[5] = "GID_TACOURSE_SUBTOKYO_5"] = 5;
        values[valuesById[6] = "GID_TACOURSE_WANGANEAST"] = 6;
        values[valuesById[7] = "GID_TACOURSE_WANGANWEST"] = 7;
        values[valuesById[8] = "GID_TACOURSE_K1_DOWN"] = 8;
        values[valuesById[9] = "GID_TACOURSE_K1_UP"] = 9;
        values[valuesById[10] = "GID_TACOURSE_YAESUIN"] = 10;
        values[valuesById[11] = "GID_TACOURSE_YAESUOUT"] = 11;
        values[valuesById[12] = "GID_TACOURSE_YOKOHAMAIN"] = 12;
        values[valuesById[13] = "GID_TACOURSE_YOKOHAMAOUT"] = 13;
        values[valuesById[14] = "GID_TACOURSE_NAGOYA"] = 14;
        values[valuesById[15] = "GID_TACOURSE_OSAKA"] = 15;
        values[valuesById[16] = "GID_TACOURSE_KOBE"] = 16;
        values[valuesById[17] = "GID_TACOURSE_FUKUOKA"] = 17;
        values[valuesById[18] = "GID_TACOURSE_HAKONEFOR"] = 18;
        values[valuesById[19] = "GID_TACOURSE_HAKONEBACK"] = 19;
        values[valuesById[20] = "GID_TACOURSE_TURNPIKE_UP"] = 20;
        values[valuesById[21] = "GID_TACOURSE_TURNPIKE_DOWN"] = 21;
        values[valuesById[22] = "GID_TACOURSE_TOKYOALL"] = 22;
        values[valuesById[23] = "GID_TACOURSE_KANAGAWAALL"] = 23;
        return values;
    })();

    /**
     * GID_RUNAREA enum.
     * @name game.GID_RUNAREA
     * @enum {number}
     * @property {number} GID_RUNAREA_C1=0 GID_RUNAREA_C1 value
     * @property {number} GID_RUNAREA_RING=1 GID_RUNAREA_RING value
     * @property {number} GID_RUNAREA_SUBTOKYO_3_4=2 GID_RUNAREA_SUBTOKYO_3_4 value
     * @property {number} GID_RUNAREA_SUBTOKYO_5=3 GID_RUNAREA_SUBTOKYO_5 value
     * @property {number} GID_RUNAREA_WANGAN=4 GID_RUNAREA_WANGAN value
     * @property {number} GID_RUNAREA_K1=5 GID_RUNAREA_K1 value
     * @property {number} GID_RUNAREA_YAESU=6 GID_RUNAREA_YAESU value
     * @property {number} GID_RUNAREA_YOKOHAMA=7 GID_RUNAREA_YOKOHAMA value
     * @property {number} GID_RUNAREA_NAGOYA=8 GID_RUNAREA_NAGOYA value
     * @property {number} GID_RUNAREA_OSAKA=9 GID_RUNAREA_OSAKA value
     * @property {number} GID_RUNAREA_KOBE=10 GID_RUNAREA_KOBE value
     * @property {number} GID_RUNAREA_FUKUOKA=11 GID_RUNAREA_FUKUOKA value
     * @property {number} GID_RUNAREA_HAKONE=12 GID_RUNAREA_HAKONE value
     * @property {number} GID_RUNAREA_TURNPIKE=13 GID_RUNAREA_TURNPIKE value
     * @property {number} GID_RUNAREA_C1_REV=14 GID_RUNAREA_C1_REV value
     * @property {number} GID_RUNAREA_OSAKA_REV=15 GID_RUNAREA_OSAKA_REV value
     * @property {number} GID_RUNAREA_HAKONE_REV=16 GID_RUNAREA_HAKONE_REV value
     * @property {number} GID_RUNAREA_C1_CLOSED=17 GID_RUNAREA_C1_CLOSED value
     */
    game.GID_RUNAREA = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_RUNAREA_C1"] = 0;
        values[valuesById[1] = "GID_RUNAREA_RING"] = 1;
        values[valuesById[2] = "GID_RUNAREA_SUBTOKYO_3_4"] = 2;
        values[valuesById[3] = "GID_RUNAREA_SUBTOKYO_5"] = 3;
        values[valuesById[4] = "GID_RUNAREA_WANGAN"] = 4;
        values[valuesById[5] = "GID_RUNAREA_K1"] = 5;
        values[valuesById[6] = "GID_RUNAREA_YAESU"] = 6;
        values[valuesById[7] = "GID_RUNAREA_YOKOHAMA"] = 7;
        values[valuesById[8] = "GID_RUNAREA_NAGOYA"] = 8;
        values[valuesById[9] = "GID_RUNAREA_OSAKA"] = 9;
        values[valuesById[10] = "GID_RUNAREA_KOBE"] = 10;
        values[valuesById[11] = "GID_RUNAREA_FUKUOKA"] = 11;
        values[valuesById[12] = "GID_RUNAREA_HAKONE"] = 12;
        values[valuesById[13] = "GID_RUNAREA_TURNPIKE"] = 13;
        values[valuesById[14] = "GID_RUNAREA_C1_REV"] = 14;
        values[valuesById[15] = "GID_RUNAREA_OSAKA_REV"] = 15;
        values[valuesById[16] = "GID_RUNAREA_HAKONE_REV"] = 16;
        values[valuesById[17] = "GID_RUNAREA_C1_CLOSED"] = 17;
        return values;
    })();

    /**
     * GID_RAMP enum.
     * @name game.GID_RAMP
     * @enum {number}
     * @property {number} GID_RAMP_C1_IN_KANDABASHI=0 GID_RAMP_C1_IN_KANDABASHI value
     * @property {number} GID_RAMP_C1_IN_SHIODOME=1 GID_RAMP_C1_IN_SHIODOME value
     * @property {number} GID_RAMP_C1_OUT_KANDABASHI=2 GID_RAMP_C1_OUT_KANDABASHI value
     * @property {number} GID_RAMP_C1_OUT_SHIBA=3 GID_RAMP_C1_OUT_SHIBA value
     * @property {number} GID_RAMP_RING_LEFT_ARIAKE=4 GID_RAMP_RING_LEFT_ARIAKE value
     * @property {number} GID_RAMP_RING_RIGHT_KIBA=5 GID_RAMP_RING_RIGHT_KIBA value
     * @property {number} GID_RAMP_SUBTOKYO_SHIBUYA=6 GID_RAMP_SUBTOKYO_SHIBUYA value
     * @property {number} GID_RAMP_SUBTOKYO_GAIEN=7 GID_RAMP_SUBTOKYO_GAIEN value
     * @property {number} GID_RAMP_SUBTOKYO_DAIKANCHOU=8 GID_RAMP_SUBTOKYO_DAIKANCHOU value
     * @property {number} GID_RAMP_SUBTOKYO_SHINJUKU=9 GID_RAMP_SUBTOKYO_SHINJUKU value
     * @property {number} GID_RAMP_WANGAN_EAST_AIRPORT=10 GID_RAMP_WANGAN_EAST_AIRPORT value
     * @property {number} GID_RAMP_WANGAN_EAST_DAIKOKU=11 GID_RAMP_WANGAN_EAST_DAIKOKU value
     * @property {number} GID_RAMP_WANGAN_WEST_RINKAI=12 GID_RAMP_WANGAN_WEST_RINKAI value
     * @property {number} GID_RAMP_WANGAN_WEST_AIRPORT=13 GID_RAMP_WANGAN_WEST_AIRPORT value
     * @property {number} GID_RAMP_K1_DOWN_SHIBAURA=14 GID_RAMP_K1_DOWN_SHIBAURA value
     * @property {number} GID_RAMP_K1_DOWN_HANEDA=15 GID_RAMP_K1_DOWN_HANEDA value
     * @property {number} GID_RAMP_K1_UP_HANEDA=16 GID_RAMP_K1_UP_HANEDA value
     * @property {number} GID_RAMP_K1_UP_SHIOIRI=17 GID_RAMP_K1_UP_SHIOIRI value
     * @property {number} GID_RAMP_YAESU_SHIODOME=18 GID_RAMP_YAESU_SHIODOME value
     * @property {number} GID_RAMP_YAESU_KYOBASHI=19 GID_RAMP_YAESU_KYOBASHI value
     * @property {number} GID_RAMP_YAESU_KANDABASHI=20 GID_RAMP_YAESU_KANDABASHI value
     * @property {number} GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA=21 GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA value
     * @property {number} GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI=22 GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI value
     * @property {number} GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA=23 GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA value
     * @property {number} GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI=24 GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI value
     * @property {number} GID_RAMP_NAGOYA_MARUNOUCHI=25 GID_RAMP_NAGOYA_MARUNOUCHI value
     * @property {number} GID_RAMP_OOSAKA_DOUTONBORI=26 GID_RAMP_OOSAKA_DOUTONBORI value
     * @property {number} GID_RAMP_KOBE_SHINKOUCHOU=27 GID_RAMP_KOBE_SHINKOUCHOU value
     * @property {number} GID_RAMP_KOBE_NADAOOHASHI=28 GID_RAMP_KOBE_NADAOOHASHI value
     * @property {number} GID_RAMP_FUKUOKA_WEST_MEIHAMA=29 GID_RAMP_FUKUOKA_WEST_MEIHAMA value
     * @property {number} GID_RAMP_FUKUOKA_WEST_HAKATA=30 GID_RAMP_FUKUOKA_WEST_HAKATA value
     * @property {number} GID_RAMP_FUKUOKA_EAST_NISHI=31 GID_RAMP_FUKUOKA_EAST_NISHI value
     * @property {number} GID_RAMP_FUKUOKA_EAST_HANDOUBASHI=32 GID_RAMP_FUKUOKA_EAST_HANDOUBASHI value
     * @property {number} GID_RAMP_HAKONE_FOR=33 GID_RAMP_HAKONE_FOR value
     * @property {number} GID_RAMP_HAKONE_BACK=34 GID_RAMP_HAKONE_BACK value
     * @property {number} GID_RAMP_TURNPIKE_UP=35 GID_RAMP_TURNPIKE_UP value
     * @property {number} GID_RAMP_TURNPIKE_DOWN=36 GID_RAMP_TURNPIKE_DOWN value
     */
    game.GID_RAMP = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_RAMP_C1_IN_KANDABASHI"] = 0;
        values[valuesById[1] = "GID_RAMP_C1_IN_SHIODOME"] = 1;
        values[valuesById[2] = "GID_RAMP_C1_OUT_KANDABASHI"] = 2;
        values[valuesById[3] = "GID_RAMP_C1_OUT_SHIBA"] = 3;
        values[valuesById[4] = "GID_RAMP_RING_LEFT_ARIAKE"] = 4;
        values[valuesById[5] = "GID_RAMP_RING_RIGHT_KIBA"] = 5;
        values[valuesById[6] = "GID_RAMP_SUBTOKYO_SHIBUYA"] = 6;
        values[valuesById[7] = "GID_RAMP_SUBTOKYO_GAIEN"] = 7;
        values[valuesById[8] = "GID_RAMP_SUBTOKYO_DAIKANCHOU"] = 8;
        values[valuesById[9] = "GID_RAMP_SUBTOKYO_SHINJUKU"] = 9;
        values[valuesById[10] = "GID_RAMP_WANGAN_EAST_AIRPORT"] = 10;
        values[valuesById[11] = "GID_RAMP_WANGAN_EAST_DAIKOKU"] = 11;
        values[valuesById[12] = "GID_RAMP_WANGAN_WEST_RINKAI"] = 12;
        values[valuesById[13] = "GID_RAMP_WANGAN_WEST_AIRPORT"] = 13;
        values[valuesById[14] = "GID_RAMP_K1_DOWN_SHIBAURA"] = 14;
        values[valuesById[15] = "GID_RAMP_K1_DOWN_HANEDA"] = 15;
        values[valuesById[16] = "GID_RAMP_K1_UP_HANEDA"] = 16;
        values[valuesById[17] = "GID_RAMP_K1_UP_SHIOIRI"] = 17;
        values[valuesById[18] = "GID_RAMP_YAESU_SHIODOME"] = 18;
        values[valuesById[19] = "GID_RAMP_YAESU_KYOBASHI"] = 19;
        values[valuesById[20] = "GID_RAMP_YAESU_KANDABASHI"] = 20;
        values[valuesById[21] = "GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA"] = 21;
        values[valuesById[22] = "GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI"] = 22;
        values[valuesById[23] = "GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA"] = 23;
        values[valuesById[24] = "GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI"] = 24;
        values[valuesById[25] = "GID_RAMP_NAGOYA_MARUNOUCHI"] = 25;
        values[valuesById[26] = "GID_RAMP_OOSAKA_DOUTONBORI"] = 26;
        values[valuesById[27] = "GID_RAMP_KOBE_SHINKOUCHOU"] = 27;
        values[valuesById[28] = "GID_RAMP_KOBE_NADAOOHASHI"] = 28;
        values[valuesById[29] = "GID_RAMP_FUKUOKA_WEST_MEIHAMA"] = 29;
        values[valuesById[30] = "GID_RAMP_FUKUOKA_WEST_HAKATA"] = 30;
        values[valuesById[31] = "GID_RAMP_FUKUOKA_EAST_NISHI"] = 31;
        values[valuesById[32] = "GID_RAMP_FUKUOKA_EAST_HANDOUBASHI"] = 32;
        values[valuesById[33] = "GID_RAMP_HAKONE_FOR"] = 33;
        values[valuesById[34] = "GID_RAMP_HAKONE_BACK"] = 34;
        values[valuesById[35] = "GID_RAMP_TURNPIKE_UP"] = 35;
        values[valuesById[36] = "GID_RAMP_TURNPIKE_DOWN"] = 36;
        return values;
    })();

    /**
     * GID_TIMEZONE enum.
     * @name game.GID_TIMEZONE
     * @enum {number}
     * @property {number} GID_TIMEZONE_DAY=0 GID_TIMEZONE_DAY value
     * @property {number} GID_TIMEZONE_NIGHT=1 GID_TIMEZONE_NIGHT value
     */
    game.GID_TIMEZONE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_TIMEZONE_DAY"] = 0;
        values[valuesById[1] = "GID_TIMEZONE_NIGHT"] = 1;
        return values;
    })();

    /**
     * GID_EXTREME enum.
     * @name game.GID_EXTREME
     * @enum {number}
     * @property {number} GID_EXTREME_NORMAL=0 GID_EXTREME_NORMAL value
     * @property {number} GID_EXTREME_REVERSE=1 GID_EXTREME_REVERSE value
     */
    game.GID_EXTREME = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GID_EXTREME_NORMAL"] = 0;
        values[valuesById[1] = "GID_EXTREME_REVERSE"] = 1;
        return values;
    })();

    return game;
})();

export { $root as default };
