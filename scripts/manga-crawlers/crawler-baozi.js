// ==UserScript==
// @name         crawler-baozi
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  desc
// @author       Akuma
// @match        https://cn.czmanga.com/comic/chapter/*
// @match        https://cn.czmanga.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-baozi.js
// ==/UserScript==

const DO_SAVE = true;

(function () {
    'use strict';

    console.log('Starting inject...');
    if (/\/comic\/chapter\//.test(window.location.pathname)) {
        // 阅读页，添加按钮爬取图片
        injectChapPage();
    } else { // 作品页，添加 index
        injectInfoPage();
    }
})();

function injectInfoPage() {
    runWhenLoaded('#chapter-items', () => {
        let i = 1;
        Array.from(document.querySelectorAll('#chapter-items>div span')).forEach(span => {
            span.textContent = `[${i}]${span.textContent}`;
            i += 1;
        });
    });
}

function injectChapPage() {
    let remain = getQueryInt('remain');
    console.log(`remain: ` + remain);
    let onClick = _ => {
        // 滚到页面底部让它加载图片
        // window.scrollTo(0, document.body.scrollHeight);
        document.querySelector('.next_chapter').scrollIntoView({
            behavior: "instant",
            block: "end"
        });
        setTimeout(
            _ => {
                getTasks(DO_SAVE).then(tasks => {
                    let nextPage = getNextChapUrl();
                    resumeNextChap(nextPage, remain);
                });
            }, 1_500);
    };
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);

    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}

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
    let bookName = verifyFileName(document.title.match(/- (.*) - 包子漫画/)[1]);
    console.log(`bookName: ` + bookName);
    return bookName;
}

function getChapIndex() {
    let chapIndex = window.location.pathname.match(/\/0_(.*).html/)[1];
    chapIndex = parseInt(chapIndex) + 1;
    console.log(`chapIndex: ` + chapIndex);
    return chapIndex;
}

function getChapName() {
    let chapName = document.querySelector(`.header .title`).textContent;
    chapName = verifyFileName(chapName);
    console.log(`chapName: ` + chapName);
    return chapName;
}

function getPicUrls() {
    return new Promise(resolve => {
        let picUrls = Array.from(document.querySelectorAll(`.comic-contain amp-img`))
            .map(img => img.getAttribute('data-src'));
        console.log(`picUrls: \n`, picUrls);
        resolve(picUrls);
    });
}

function getNextChapUrl() {
    let nextPage = document.querySelector('#next-chapter').href;
    console.log(`nextPage: ` + nextPage);
    return nextPage;
}
