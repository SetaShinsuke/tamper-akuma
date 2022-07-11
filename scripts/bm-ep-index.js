// ==UserScript==
// @name         BM-EP-index
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hover to show episode index.
// @author       Akuma
// @match        https://manga.bilibili.com/detail/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bm-ep-index.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bm-ep-index.js
// ==/UserScript==

var TIMEOUT = 3000;
var END_MIN = 5; //12:05分停止刷新
// 兑换页: https://manga.bilibili.com/eden/credits-exchange.html?refresh=true

console.log('starting inject');

(function () {
    'use strict';
    window.addEventListener('load', (x) => {
        console.log('window loaded');
        try {
            onReady();
        } catch (e) {
            console.error(e);
        }
    });
})();

function onReady() {
    var epList = document.querySelector('.episode-list');
    if (!epList) {
        return;
    }
    var i = 0;
    epList.querySelectorAll('.list-item').forEach(btnEp => {
        i++;
        btnEp.title = `${i}`;
    });
}