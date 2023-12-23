// ==UserScript==
// @name         crawler-90mh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        http://www.90mh.org/manhua/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-90mh.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-90mh.js
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
    let bookName = document.querySelector('.title h1 a').innerText;
    console.log(`bookName: ` + bookName);
    return bookName;
}

function getChapIndex() {
    let chapIndex = null;
    if(/baozoulinjia/.test(window.location.pathname)){
        chapIndex = parseInt(window.location.pathname.match(/\/(\d+).html/)[1]);
        chapIndex = chapIndex - 1259;
    }
    console.log(`chapIndex: ` + chapIndex);
    return chapIndex;
}

function getChapName() {
    let chapName = document.querySelector('.title h2').innerText;
    chapName = verifyFileName(chapName);
    console.log(`chapName: ` + chapName);
    return chapName;
}

function getPicUrls() {
    return new Promise(resolve => {
        let picUrls = chapterImages.map(path => `http://js.tingliu.cc/${chapterPath}${path}`);
        console.log(`picUrls: \n`, picUrls);
        resolve(picUrls);
    });
}

function getNextChapUrl() {
    let nextPage = nextChapterData.url;
    console.log(`nextPage: ` + nextPage);
    return nextPage;
}
