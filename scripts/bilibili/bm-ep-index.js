// ==UserScript==
// @name         BM-EP-index
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Hover to show episode index.
// @author       Akuma
// @match        https://manga.bilibili.com/detail/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// ==/UserScript==

var TIMEOUT = 2000;

console.log('starting inject');

(function () {
    'use strict';
    window.addEventListener('load', (x) => {
        console.log('window loaded');
        try {
            setTimeout(onReady, TIMEOUT);
        } catch (e) {
            console.error(e);
        }
    });
})();

function onReady() {
    // unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
    // unsafeWindow.GM_listValues = GM_listValues;
    var epList = document.querySelector('.episode-list');
    if (!epList) {
        console.log('Eplist not found')
        return;
    }
    var i = 0;
    epList.querySelectorAll('.list-item').forEach(btnEp => {
        i++;
        btnEp.title = `${i}`;
    });
    console.log('Index added.');
}

function doPost() {
    var res;
    GM_xmlhttpRequest({
        method: "POST",
        url: "https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex?device=pc&platform=web",
        data: "ep_id=379397",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Referer": "https://manga.bilibili.com",
            "Origin": "https://manga.bilibili.com"
        },
        onerror: function (error) {
            console.log(error);
        },
        onload: function (response) {
            console.log(response);
            res = response;
            console.log(res.resposeText);
        }
    });
}