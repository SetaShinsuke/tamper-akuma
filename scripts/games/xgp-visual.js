// ==UserScript==
// @name         XGP-Visual
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to show xgp game details
// @author       Akuma
// @match        https://catalog.gamepass.com/sigls/v2?id=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/xgp-visual.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/games/xgp-visual.js
// ==/UserScript==

(function () {
    'use strict';
    var jsonStr = document.querySelector('#json').innerText.replaceAll('\n', '');
    var array = jsonStr.match(/\{id: ".*?"\}/g);
    if (!array || array.length === 0) {
        alert('未找到即将离开的游戏!');
        return
    }
    var ids = array.map(x => x.replaceAll(`{id: "`, ``).replaceAll(`"}`, ``));
    ids.forEach(id => {
        var detailUrl = `https://dayone.xboxera.com/game/${id}`;
        console.log(detailUrl);
        // openNewBackgroundTab(detailUrl);
        GM_openInTab(detailUrl, true);
    });
})();

function openNewBackgroundTab(url) {
    var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
        true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}