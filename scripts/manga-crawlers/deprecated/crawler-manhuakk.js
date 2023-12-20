// ==UserScript==
// @name         Crawl-MHKK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取漫画看看的漫画
// @author       Akuma
// @match        http://manhuakk.com/manhua/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuakk.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuakk.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    var pics = qTcms_S_m_murl.split("$qingtiandy$");
    pics.forEach(pic => {
        // 此方法作用未知
        var realPic = f_qTcms_Pic_curUrl_realpic(pic);
    });
}
