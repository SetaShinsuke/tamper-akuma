// ==UserScript==
// @name         Bilibili-Watchlater
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  “稍后观看”中点击封面，只打开单个视频，不打开整个列表
// @author       Akuma
// @match        https://www.bilibili.com/watchlater/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('inject watchlater');
    window.addEventListener('load', (x) => {
        console.log('window loaded');
        setTimeout(() => {
            inject()
        }, 3000)
    });
})();

function inject(){
    document.querySelectorAll(".av-item").forEach( x => {
        var a = x.querySelector("a");
        console.log(a.href);
        a.href = a.href.replace("/medialist/play/watchlater","");
    });
}