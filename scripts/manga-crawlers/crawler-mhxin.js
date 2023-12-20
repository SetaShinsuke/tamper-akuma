// ==UserScript==
// @name         crawler-mhxin
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  desc
// @author       Akuma
// @match        https://www.mhxin.com/manhua/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-mhxin.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-mhxin.js
// ==/UserScript==

const DO_SAVE = true;

(function () {
    'use strict';
    console.log('Ready to crawl.')
    let remain = getQueryInt('remain');
    console.log(`remain: ` + remain);
    let onClick = _ => {
        getTasks(DO_SAVE).then(tasks => {
            let nextPage = getNextChapUrl();
            resumeNextChap(nextPage, remain);
        });
    };
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);

    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
})();

function getTasks(doSave) {
    return new Promise((onFetched, onFetchFail) => {
        // 异步获取 picUrls
        getPicUrls().then(picUrls => {
            let info = {
                bookName: getBookName(),
                chapIndex: getChapIndex(),
                chapName: getChapName(),
                picUrls: picUrls
            }
            let tasks = forkMangaChap(info, doSave);
            // tasks.json 已完成
            onFetched(tasks);
        }).catch(err => {
            console.log(`getPicUrls fail:`);
            console.error(err);
            onFetchFail(err);
        });
    });
}

function getBookName() {
    // bookName
    let bookName = verifyFileName(document.querySelector('.book_title').title);
    console.log(`bookName: ` + bookName);
    return bookName;
}

function getChapIndex() {
    // chapIndex
    let chapIndex = window.location.pathname.match(/\/(.*).html/)[1].split('/').pop();
    console.log(`chapIndex: ` + chapIndex);
    console.log(`注意 vol_heads 以此网站的 ID 为准!`)
    return chapIndex;
}

function getChapName() {
    // chapName
    let chapName = verifyFileName(document.querySelector('.book_num').title);
    console.log(`chapName: ` + chapName);
    return chapName;
}

function getPicUrls() {
    return new Promise(resolve => {
        // picUrls
        let picUrls = chapterImages;
        console.log(`picUrls: \n`, picUrls);
        resolve(picUrls);
    });
}

function getNextChapUrl() {
    // 下一页的地址
    let nextPage = nextChapterData.url;
    console.log(`nextPage: ` + nextPage);
    return nextPage;
}
