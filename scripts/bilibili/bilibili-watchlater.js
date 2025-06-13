// ==UserScript==
// @name         Bilibili-Watchlater
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  “稍后观看”中点击封面，只打开单个视频，不打开整个列表
// @author       Akuma
// @match        https://www.bilibili.com/watchlater/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-watchlater.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-watchlater.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('inject watchlater');
    // runWhenLoaded('.av-item', inject);
    runWhenLoaded('.bili-cover-card', inject);
})();

function inject() {
    document.querySelectorAll(".bili-cover-card").forEach(x => {
        // var a = x.querySelector("a");
        var a = x;
        console.log(a.href);
        // a.href = a.href.replace("/medialist/play/watchlater", "");
        a.href = a.href.replace(/\/list\/watchlater(\/?)\?bvid=(.*?)&.*/, "/video/$2");
    });
}