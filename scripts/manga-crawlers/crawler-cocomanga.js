// ==UserScript==
// @name         Crawl-Afdian
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取爱发电的漫画
// @author       Akuma
// @match        https://afdian.net/album/*?save=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    var urls = [];
    var pics = document.querySelectorAll('.mh_comicpic');
    pics.forEach(pic => {
        var page = pic.getAttribute('p');
        var url = __cr.getPicUrl(page);
        console.log(url);
        urls.push(url);
    });
    urls;
}