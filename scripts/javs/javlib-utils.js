// ==UserScript==
// @name         JavLibUtils
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Search contents in multiple websites
// @author       Akuma
// @match        https://www.javlibrary.com/*
// @match        https://www.f61m.com/*
// @match        https://javlib.com/*
// @match        http://javlib.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/jav/javlib-utils.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/jav/javlib-utils.js
// ==/UserScript==

(function () {
    'use strict';
    // setTimeout(onReady, TIMEOUT);
    console.log(`jav host: ${window.location.hostname}`);
    switch (window.location.hostname) {
        case 'javlib.com':
            // 跳转到中文网页
            window.open('https://www.javlibrary.com/cn/', '_self');
            break;
        case 'www.javlibrary.com':
        case 'www.f61m.com':
            // 自动选择'已成年'
            setAdult();
            setSearch();
            break;
    }
})();

function setSearch() {
    // todo: 搜索 jav
    console.log('TODO: Add jav search');
}

// function setAdult() {
//     var intervalTask = setInterval(() => {
//         var adultWarningMask = document.querySelector('#adultwarningmask');
//         if (!adultWarningMask) {
//             return
//         }
//         if (adultWarningMask.style['display'] === 'none') {
//             console.log('Adult warning already canceled');
//             clearInterval(intervalTask);
//             return;
//         }
//         adultWarningMask.style['display'] = 'none';
//         setCookie('over18', 18);
//         console.log('Age has been set to over 18.')
//     }, 1000);
// }

function setAdult() {
    runWhenLoaded('#adultwarningmask', (adultWarningMask) => {
        if (adultWarningMask.style['display'] === 'none') {
            console.log('Adult warning already canceled');
        } else {
            adultWarningMask.style['display'] = 'none';
            setCookie('over18', 18);
        }
    });
}

// 每秒找一次element，直到元素加载出来再运行
function runWhenLoaded(queryStr, task, timeout = 1000, maxTimeout = 30_000) {
    // 找到元素后开启任务
    var intervalTask = setInterval(() => {
        console.log('Doing interval...');
        var element = document.querySelector(queryStr);
        if (element) {
            task(element);
            console.log(`Interval finished, id: ${intervalTask}`);
            clearInterval(intervalTask);
        }
    }, timeout);
    // 30s 后仍找不到元素，停止任务
    setTimeout(() => {
        console.log(`查找元素超时，用时: ${parseInt(maxTimeout / 1000)}s`);
        clearInterval(intervalTask);
    }, maxTimeout);
}

