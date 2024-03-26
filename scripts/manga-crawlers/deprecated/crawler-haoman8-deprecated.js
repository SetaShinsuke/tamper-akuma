// ==UserScript==
// @name         Crawl-HaoMan8
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  爬取好漫8的漫画
// @author       Akuma
// @match        https://www.haoman8.com/comic/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-haoman8.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-haoman8.js
// ==/UserScript==
var VOL_HEADS_HUNTER = ["001", "009", "018", "027", "036", "045", "055", "064", "074", "084", "094", "104", "116", "128", "140", "152", "164", "176", "188", "200", "212", "224", "236", "248", "261", "271", "281", "291", "301", "311", "321", "331", "341", "351", "361", "371", "381", "391"];

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(getTasks, 2_000);
})();

function getTasks() {
    // "全职猎人"
    var bookName = verifyFileName(document.querySelector('#crumbComicLink').innerHTML);
    // "298 蔷薇"
    var chapterName = verifyFileName(document.querySelector('.chapter-title').innerHTML);
    var chapterIndex = window.location.pathname.split('/').pop();
    if (/^\d{1,4}_*/.test(chapterName)) {
        chapterIndex = (chapterName.match(/^\d{1,4}/)[0]).padStart(4, '0');
        chapterName = chapterName.replace(/^\d{1,4}/, "第$&话");
        chapterName = `${chapterIndex}_${chapterName}`;
    }
    // 每个分卷的首话
    var volHeads = [];
    var bookId = document.querySelector('#collectionBtn').getAttribute('data-id');
    if (bookId === '5708') {
        volHeads = VOL_HEADS_HUNTER.map(x => parseInt(x));
    }

    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;
    tasks['config']['vol_heads'] = volHeads;

    tasks[chapterName] = [];
    var imgs = document.querySelector('#reader-scroll').querySelectorAll('div>div>a>img');
    var i = 0;
    imgs.forEach(img => {
        i += 1;
        var url = img.getAttribute('data-echo');
        // var ext = url.split('.').pop();
        // todo: 都是webp格式吗？
        var ext = "webp";
        var fileName = `${chapterIndex}_` + `${i}`.padStart(3, '0') + `.${ext}`;
        tasks[chapterName].push({
            'url': url,
            'file_name': fileName
        })
    });

    console.log(tasks);

    // 保存
    var save_name = `tasks_${chapterIndex}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

function saveTextFile(text, fileName) {
    var data = new Blob([text], {type: 'text/plain'});
    let textFile = window.URL.createObjectURL(data);

    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = textFile;
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });

    return textFile;
}

function verifyFileName(fileName) {
    fileName = fileName.replace('\\', '_').replace('/', '_');
    fileName = fileName.replace('（', '(').replace('）', ')')
        .replace(' ', '_').replace('：', ':');
    var reg = /[/·. :*?"<>|]/g;
    fileName = fileName.replace(reg, '-');
    if (fileName.length > 150) {
        fileName = fileName.substring(0, 100);
    } //# 文件名超长
    return fileName;
}