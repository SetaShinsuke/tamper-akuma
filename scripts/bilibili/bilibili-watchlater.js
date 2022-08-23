// ==UserScript==
// @name         Bilibili-Watchlater
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  “稍后观看”中点击封面，只打开单个视频，不打开整个列表
// @author       Akuma
// @match        https://www.bilibili.com/watchlater/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-watchlater.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-watchlater.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('inject watchlater');
    // window.addEventListener('load', (x) => {
    //     console.log('window loaded');
    //     setTimeout(() => {
    //         inject()
    //     }, 3000)
    // });
    runWhenLoaded('.av-item', inject);
})();

function inject() {
    document.querySelectorAll(".av-item").forEach(x => {
        var a = x.querySelector("a");
        console.log(a.href);
        a.href = a.href.replace("/medialist/play/watchlater", "");
    });
}

// 每秒找一次element，直到元素加载出来再运行
function runWhenLoaded(queryStr, task, timeout = 1000, maxTimeout = 30_000) {
    var safeStop = null;
    // 找到元素后开启任务
    var intervalTask = setInterval(() => {
        console.log('Doing interval...');
        var element = document.querySelector(queryStr);
        if (element) {
            task(element);
            console.log(`Interval finished, id: ${intervalTask}`);
            clearInterval(safeStop);
            clearInterval(intervalTask);
        }
    }, timeout);
    // 30s 后仍找不到元素，停止任务
    safeStop = setTimeout(() => {
        console.log(`查找元素超时，用时: ${parseInt(maxTimeout / 1000)}s`);
        clearInterval(intervalTask);
    }, maxTimeout);
}