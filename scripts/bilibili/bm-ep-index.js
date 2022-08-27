// ==UserScript==
// @name         BM-EP-index
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Hover to show episode index.
// @author       Akuma
// @match        https://manga.bilibili.com/detail/*
// @match        https://manga.bilibili.com/mc*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('starting inject ep index...');
    onReady()
})();

function onReady() {
    if (document.location.pathname.includes('/detail')) {
        addIndexToDetailPage();
    } else {
        addIndexToReaderPage();
    }
}

function addIndexToReaderPage() {
    runWhenLoaded('.episode-list>div>button', () => {
        var ord = 0;
        var btns = document.querySelectorAll('.episode-list>div>button')
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].classList.contains('selected')) {
                ord = i + 1;
            }
        }
        console.log('ord: ', ord);
        document.querySelector('.info-hud.none-select.info-hud.p-absolute.info-layer').title = `Ord:${ord}`;
        console.log('Index added to Reader Page.');

    });
}

function addIndexToDetailPage() {
    runWhenLoaded('.episode-list', epList => {
        if (!epList) {
            console.log('Eplist not found')
            return;
        }
        var i = 0;
        epList.querySelectorAll('.list-item').forEach(btnEp => {
            i++;
            btnEp.title = `${i}`;
        });
        console.log('Index added to Detail Page.');
    });
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