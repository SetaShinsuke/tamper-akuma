// ==UserScript==
// @name         Jav-Automation
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automate click buttons etc.
// @author       Akuma
// @match        https://hpjav.tv/download/*
// @match        https://asianclub.tv/f/*
// @match        https://www.ffem.club/f/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-automation.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-automation.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    let href = window.location.href;
    if (href.startsWith("https://hpjav.tv/download/")) {
        injectHpDown()
    } else if (href.startsWith("https://asianclub.tv/f/") || href.startsWith("https://www.ffem.club/f/")) {
        injectAS();
    }
}

function injectHpDown() {
    runWhenLoaded('#down_url', e => {
        console.log('e href: ' + e.href);
        if (e && e.href && !e.innerText.includes('LOADING')) {
            window.open(e.href, "_self");
        }
    });
}

function injectAS() {
    runWhenLoaded("#countdown", countdown => {
        countdown.textContent = '1';
        runWhenLoaded("#download", btnDown => {
            btnDown.click();
            console.log("6秒内隐藏遮罩"); // 暂时没有更好的办法
            setTimeout(blockShade, 6_000);
        });
    });
}

function blockShade() {
    // 隐藏上层遮罩
    var divs = document.querySelectorAll('div');
    console.log('隐藏AD遮罩');
    divs.forEach(ad => {
        if (ad.style['opacity'] !== '') {
            ad.style['display'] = 'none';
        }
    });
}