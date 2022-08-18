// ==UserScript==
// @name         Steam-HowLongToBeat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to show how long to beat
// @author       Akuma
// @match        https://store.steampowered.com/app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/xgp-visual.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/xgp-visual.js
// ==/UserScript==

(function () {
    'use strict';
    var gameName = document.querySelector('#appHubAppName').textContent;
    gameName = gameName.split(':')[0];
    gameName = gameName.match(/《.*》/)[0];
    gameName = gameName.replace(/[’®™《》]/g, '');
    // 去除中文
    gameName = gameName.replace(/[\u4e00-\u9fa5]/g, '');
    var url = `https://howlongtobeat.com/?keyword=${gameName}`;
    GM_openInTab(url, true);
})();