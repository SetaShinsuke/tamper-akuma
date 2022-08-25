// ==UserScript==
// @name         MangaSearchBangumi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Search contents in multiple websites
// @author       Akuma
// @match        https://bangumi.tv/subject/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
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