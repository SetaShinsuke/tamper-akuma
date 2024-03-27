// ==UserScript==
// @name         crawler-manhuagui
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  desc
// @author       Akuma
// @match        https://www.manhuagui.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

let IMG_HOST = `https://i.hamreus.com`;

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = verifyFileName(document.getElementsByTagName('h1')[0].innerText);
            let chapName = verifyFileName(document.getElementsByTagName('h2')[0].innerText);
            bookName = `${bookName}_${chapName}`;
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let chapIndex = null;
            console.log(`chapIndex: ` + chapIndex);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = verifyFileName(document.getElementsByTagName('h2')[0].innerText);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let data = getDataFromScript();
            // let picUrls = data.files.map(f => IMG_HOST + data.path + f + `?e=${data.sl.e}&m=${data.sl.m}`);
            let picUrls = data.files.map(f => IMG_HOST + data.path + f);
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findNextChapUrl() {
        return new Promise((resolve, reject) => {
            let nextChapUrl = document.querySelector('.btn-red.nextC').href;
            console.log(`nextChapUrl: ` + nextChapUrl);
            resolve(nextChapUrl);
        });
    }
}

// ---------- 正片开始 --------------------------------------------------
(function () {
    'use strict';
    console.log('Ready to crawl.');
    inject();
})();

function inject() {
    // 启用右键菜单
    document.onmousedown = null;

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

function getDataFromScript() {
    let dataJson = {};
    let scripts = document.body.getElementsByTagName('script');
    Array.from(scripts).forEach(script => {
        let jsText = script.innerText;
        if (/^[\n\s]?window\["/.test(jsText)) {
            // console.log(jsText);
            let matches = jsText.match(/function\((.*?)\){(.*)}\((.*)\)\)/);
            // console.log(matches);
            let funcPar = matches[1];
            let funcContent = matches[2];
            let par = matches[3];
            // console.log(`par: \n${par}`);
            eval(`function decodeData(${funcPar}) {
                ${funcContent}
            }`);
            // console.log(decodeData);
            let result = eval(`decodeData(${par})`);
            let jsonStr = result.match(/SMH.imgData\((.*)\).preInit\(\);/)[1];
            dataJson = JSON.parse(jsonStr);
        }
    });
    console.log(dataJson);
    return dataJson;
}