// ==UserScript==
// @name         HollowKnightMap
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  1.筛选地图项；2.自动展开所有祈愿
// @author       Akuma
// @match        https://mapgenie.io/hollow-knight-silksong/maps/pharloom
// @match        https://hkss.huijiwiki.com/wiki/%E7%A5%88%E6%84%BF
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/hollow-knight-map.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/hollow-knight-map.js
// ==/UserScript==

// const FILTER_DEFAULT = ['Bellway Station', 'Bench', 'Ventrica Station', 'Memory Locket', 'Lost Flea', 'Silk Heart', 'Mask Shard', 'Spool Fragment', 'Area Map', 'Craftmetal', 'Silk Eater', 'Ability', 'Tool', 'Crest', 'Upgrade', 'Silk Skill', 'Boss', 'Objective', 'Quest Item', 'Breakable Surface', 'Miscellaneous', 'Needolin Door', 'Lever', 'Shortcut', 'Locked Door'];
const FILTER_DEFAULT = ['BELLWAY STATION', 'BENCH', 'VENTRICA STATION', 'MEMORY LOCKET', 'LOST FLEA', 'SILK HEART', 'MASK SHARD', 'SPOOL FRAGMENT', 'AREA MAP', 'CRAFTMETAL', 'SILK EATER', 'ABILITY', 'TOOL', 'CREST', 'UPGRADE', 'SILK SKILL', 'BOSS', 'OBJECTIVE', 'QUEST ITEM', 'BREAKABLE SURFACE', 'MISCELLANEOUS', 'NEEDOLIN DOOR', 'LEVER', 'SHORTCUT', 'LOCKED DOOR', 'VENDOR', 'ARENA BATTLE'];

(function () {
    'use strict';
    console.log('Starting inject...');
    switch (window.location.host){
    case 'mapgenie.io':
        filterMap();
        break;
    case 'hkss.huijiwiki.com':
        unfoldWishes();
        break;
    }
})();

async function unfoldWishes() {
   await waitForEle('.mw-collapsible-toggle-collapsed');
   let btns = document.querySelectorAll('.mw-collapsible-toggle-collapsed');
    console.log('Unfold btn count: ' + btns.length);
    btns.forEach(btn => {
        btn.click();
    });
};


async function filterMap(){
    // 隐藏广告
    let ad = await waitForEle('#blobby-left');
    ad.style['display'] = 'none';
    (await waitForEle('.panel .social')).style['display'] = 'none';
    (await waitForEle('.panel .subtitle')).style['display'] = 'none';

    // 筛选
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
}