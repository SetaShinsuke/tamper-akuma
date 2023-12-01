// ==UserScript==
// @name         Crawler-Manhuagui
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Craw from manhuagui.com
// @author       Akuma
// @match        https://www.manhuagui.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    var tasks = {};
    var bookName = document.getElementsByTagName('h1')[0].innerText;
    var chapterName = document.getElementsByTagName('h2')[0].innerText
    chapterName = chapterName.replaceAll('（', '(').replaceAll('）', ')');
    chapterName = chapterName.replaceAll(/[\/：:*?|&;$%@"<>+,a]/g, '-');

    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    tasks[chapterName] = [];

    var coverUrl = document.getElementById('mangaBox').getElementsByTagName('img')[0].src;

    var links = [coverUrl];
    var imgs = Array.from(document.getElementById('mangaMoreBox').getElementsByTagName('img')).map(it => it.src);
    imgs.forEach(it => links.push(it));
    for (var i = 0; i < links.length; i++) {
        var url = links[i];
        var fileName = `${i + 1}`.padStart(2, '0') + '.'
        var cSubs = coverUrl.split('?')[0].split('.');
        var ext = cSubs[cSubs.length - 1];
        fileName += `${ext}`;
        tasks[chapterName].push({'url': url, 'file_name': fileName, 'page': '' + i});
    }

    console.log(`Tasks size: ${links.length}`);

    var save_name = `tasks_${Date.now()}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}
