// ==UserScript==
// @name         HollowKnightMap
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Description here
// @author       Akuma
// @match        https://mapgenie.io/hollow-knight-silksong/maps/pharloom
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/hollow-knight-map.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/hollow-knight-map.js
// ==/UserScript==

// const FILTER_DEFAULT = ['Bellway Station', 'Bench', 'Ventrica Station', 'Memory Locket', 'Lost Flea', 'Silk Heart', 'Mask Shard', 'Spool Fragment', 'Area Map', 'Craftmetal', 'Silk Eater', 'Ability', 'Tool', 'Crest', 'Upgrade', 'Silk Skill', 'Boss', 'Objective', 'Quest Item', 'Breakable Surface', 'Miscellaneous', 'Needolin Door', 'Lever', 'Shortcut', 'Locked Door'];
const FILTER_DEFAULT = ['BELLWAY STATION', 'BENCH', 'VENTRICA STATION', 'MEMORY LOCKET', 'LOST FLEA', 'SILK HEART', 'MASK SHARD', 'SPOOL FRAGMENT', 'AREA MAP', 'CRAFTMETAL', 'SILK EATER', 'ABILITY', 'TOOL', 'CREST', 'UPGRADE', 'SILK SKILL', 'BOSS', 'OBJECTIVE', 'QUEST ITEM', 'BREAKABLE SURFACE', 'MISCELLANEOUS', 'NEEDOLIN DOOR', 'LEVER', 'SHORTCUT', 'LOCKED DOOR'];

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    addButton('筛选地图', {'bottom': '1%', 'left': '1%'}, _ => {
        // 隐藏所有
        document.querySelector(`#hide-all`).click();
        // 进行筛选
        document.querySelectorAll(`.category-item`).forEach(item => {
            let title = item.querySelector(`.title`).textContent;
            if (FILTER_DEFAULT.includes(title.toUpperCase())) {
                item.click();
            };
        });
    }, 0);
};