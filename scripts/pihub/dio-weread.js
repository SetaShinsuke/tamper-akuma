// ==UserScript==
// @name         Dio-Weread
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Description here
// @author       Akuma
// @match       https://weread.qq.com/web/reader/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-weread
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-weread
// ==/UserScript==

const HOST = 'http://192.168.0.120:9292';
const ACCOUNT_WEREAD = 16;

(function() {
    'use strict';
    console.log('Starting inject...');
    injectWeread();
})();

function injectWeread() {
    addButton(`Fork it`, {
        'left': '1%',
        'bottom': '1%'
    }, _ => {
        if (!/#outline/.test(window.location.hash)) {
            window.open(window.location.href + `#outline`, '_self');
            return;
        }
        let coverUrl = document.querySelector(`.wr_bookCover_img`).src;
        let name = document.querySelector(`#outline_book_detail_header_title`).innerText;
        let author = document.querySelector(`.outline_book_detail_header_author>a`).innerText;
        let sku = location.pathname.split('/').pop();

        let acq_method = `buy`;
        acq_method = acq_method + `&acq_from=weread`
        let url = `${HOST}/pages/#/dio/main/books/new` + `?name=${name}&author=${author}&sku=${sku}&cover_url=${coverUrl}` +
            `&account_id=${ACCOUNT_WEREAD}&acq_method=${acq_method}&acq_price=0&platform=weread&region=CN&media_format=digital`;
        // 打开页面
        GM_openInTab(url, false);
    }, 0);
}