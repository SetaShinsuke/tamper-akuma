// ==UserScript==
// @name         Crawl-Dashu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  爬取大树漫画的漫画
// @author       Akuma
// @match        https://www.dashuhuwai.com/comic/*/*.html*
// @match        https://www.dashumanhua.com/comic/*/*.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-dashu.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    let remain = getQueryInt('remain');
    let onClick = _ => {
        getTasks().then(_ => {
            let nextPage = getNextChapUrl();
            resumeNextChap(nextPage, remain);
        });
    };
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);

    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ${remain}`);
    onClick();
})();

function getTasks() {
    return new Promise((onFetched, onFetchFail) => {
        let bookName = getBookName();
        let chapName = getChapName();
        // 异步获取 picUrls
        getPicUrls().then(picUrls => {
            let info = {
                bookName: bookName,
                chapName: chapName,
                picUrls: picUrls
            }
            forkMangaChap(info, false);
            // tasks.json 已完成
            onFetched();
        }).catch(err => {
            console.log(`getPicUrls fail:`);
            console.error(err);
            onFetchFail(err);
        });
    });
}

function getBookName() {
    // todo: bookName
    let bookName = myvue._data.booktitle;
    console.log(`bookName: ${bookName}`);
    return bookName;
}

function getChapName() {
    // todo: chapName
    let chapName = myvue._data.bookchaptertitle;
    console.log(`chapName: ${chapName}`);
    return chapName;
}


function getPicUrls() {
    return new Promise((resolve, reject) => {
        // 图片列表在JS代码里，并且这部分代码被加密了
        // https://res.xiaoqinre.com/images/comic/646/1290950/1587399540Jk6CM4SQU8YNnNGC.jpg
        // var funcStr = myvue.$mount.toString();

        // 找到含有图片url的代码片段
        let script = null;
        Array.from(document.scripts).forEach(s => {
            if (/\n\s+var myvue/.test(s.text)) {
                script = s;
            }
        });
        let jsString = script.text.match(/else\n\s+{\n\s+eval\((.*)\)\n;\n\s+}\n/)[1];
        jsString.replaceAll(`"`, `\\"`);
        // IIFE: (function(){})()
        jsString = '(' + jsString.replace(`}(`, `})(`);
        // var picTree = []
        eval(eval(jsString));

        // todo: picUrls
        let picUrls = picTree;
        console.log(`picUrls: ${picUrls}`);
        resolve(picUrls);
    });
}

function getNextChapUrl() {
    // todo: 下一页的地址
    let nextPage = document.querySelector(`.next a.tan`).href;
    console.log(`nextPage: ${nextPage}`);
    return nextPage;
}