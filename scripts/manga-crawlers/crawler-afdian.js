// ==UserScript==
// @name         crawler-afdian
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  爬取afdian的漫画
// @author       Akuma
// @match        https://afdian.net/album/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

const API_POST_DETAIL = `https://afdian.net/api/post/get-detail?post_id={POST_ID}`; // &album_id={ALBUM_ID}
let referer = `${window.location.protocol}//${window.location.host}`;
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": referer,
    "Origin": referer
};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = document.querySelector('.tit').innerText;
            bookName = verifyFileName(bookName);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = document.querySelector('.flex-box.gl-hover-text').children[2].innerText.replace(' / ', '');
            chapIndex = parseInt(chapIndex);
            if (isNaN(chapIndex)) {
                chapIndex = (new Date()).getTime();
            }
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = document.querySelector('.title-box').innerText.replace(`${bookNameOrg} `, '');
            chapName = verifyFileName(chapName);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise(async (resolve, reject) => {
            let picUrls = [];
            let postId = window.location.pathname.match(/\/album\/(.*)\/(.*)/)[2];
            await fetchPostDetail(postId).then(pics => {
                picUrls = pics.map(pic => pic.split('?')[0]);
            });
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = document.querySelector('.vm-feed>.flex-box.mt16')?.lastChild?.href;
            console.log(`nextChapUrl: ` + nextChapUrl);
            resolve(nextChapUrl);
        });
    }
}

// ---------- 正片开始 --------------------------------------------------
(function () {
    'use strict';
    console.log('Ready to crawl.');
    if(/\/album\/(.*?)\/(.*)/.test(window.location.pathname)){
        // 帖子页
        inject();
    }else{
        // todo: 章节列表页
    }
})();

function inject() {
    // do stuff
    let crawler = new CrawlerImpl();
    let remain = crawler.getRemainCount();
    let onClick = () => {
        crawler.forkTasks(DO_SAVE, EX_CONFIGS).then(tasks => {
            crawler.resumeNextChap(remain, NEXT_TIMEOUT);
        });
    }
    addButton('获取图片', {'top': '10%'}, onClick, 0.5);
    if (remain <= 0) {
        console.log('Nothing remain');
        return
    }
    toast(`自动进行任务，剩余: ` + remain);
    onClick();
}

// 从接口获取帖子详情
function fetchPostDetail(postId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: API_POST_DETAIL.replace('{POST_ID}', postId),
            headers: HEADERS,
            onerror: function (error) {
                console.log(`Get post detail error: `, error);
                // reject(error);
            },
            onload: function (response) {
                // console.log(response.responseText);
                let resJson = JSON.parse(response.responseText);
                console.log(resJson);
                let pics = resJson.data.post.pics;
                resolve(pics);
            }
        });
    });
}