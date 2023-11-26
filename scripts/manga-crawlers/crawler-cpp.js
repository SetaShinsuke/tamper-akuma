// ==UserScript==
// @name         Crawler-CPP
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Crawl manga from cpp
// @author       Akuma
// @match        https://www.allcpp.cn/s/*
// @match        https://www.allcpp.cn/w/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      works.allcpp.cn
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-cpp.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-cpp.js
// ==/UserScript==
var API_SERIAL_LISTS = 'https://works.allcpp.cn/rest/serial/{user_id}';
var API_SERIAL_INFO = 'https://works.allcpp.cn/rest/serial/{serial_id}';
// https://works.allcpp.cn/rest/serial/61290/contribute?index=1&size=20&sort=1
var API_CHAPTER_DETAIL = 'https://works.allcpp.cn/rest/works/{chapter_id}';
var API_SERIAL_DETAIL = 'https://works.allcpp.cn/rest/serial/{serial_id}/contribute?index=1&size=50&sort=1';
var PIC_HOST = 'https://imagecdn3.allcpp.cn/upload';

let referer = `${window.location.protocol}//${window.location.host}`;
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": referer,
    "Origin": referer
};

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {

    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = referer;

    // 拉取信息
    var bookName = 'Unknown';
    var chapIds = [];
    var taskName = Date.now() + '';

    if (window.location.pathname.startsWith('/s')) {
        // 系列
        var serialId = window.location.pathname.match(/\/s\/(.*).do/)[1];
        await getSerialInfo(serialId).then(_bookName => {
                bookName = _bookName;
            }
        )
        await getSerialDetail(serialId).then(_chapIds => {
            chapIds = _chapIds;
        });
        taskName = serialId + '';
    } else if (window.location.pathname.startsWith('/w/p')) {
        // 章节
        let chapId = window.location.pathname.match(/\/w\/p\/(.*).do/)[1]
        chapIds[0] = chapId;
        taskName = chapId + '';
    } else if (window.location.pathname.startsWith('/u')) {
        // 作者页todo
    }
    bookName = verifyFileName(bookName);
    console.log(`Book name: ${bookName}`);
    console.log(`Chap ids: ${chapIds}`);
    // 循环添加任务
    for await (const chapId of chapIds) {
        await getChapDetail(chapId).then((chapTask) => {
            Object.assign(tasks, chapTask);
        });
    }
    // await chapIds.forEach(chapId => {
    //     getChapDetail(chapId).then((chapName, pics) => {
    //         tasks[chapName] = pics;
    //     });
    // });

    tasks['config']['book_name'] = bookName;
    console.log(tasks);

    // 保存
    var save_name = `tasks_${taskName}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}

function getSerialInfo(serialId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: API_SERIAL_INFO.replace('{serial_id}', serialId),
            headers: HEADERS,
            onerror: function (error) {
                console.log(`Get serial info error: `, error);
                // reject(error);
            },
            onload: function (response) {
                // console.log(response.responseText);
                let resJson = JSON.parse(response.responseText);
                console.log(resJson);
                let bookName = resJson.name;
                resolve(bookName);
            }
        });
    });
}

function getSerialDetail(serialId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: API_SERIAL_DETAIL.replace('{serial_id}', serialId),
            headers: HEADERS,
            onerror: function (error) {
                console.log(`Get serial detail error: `, error);
                // reject(error);
            },
            onload: function (response) {
                // console.log(response.responseText);
                let resJson = JSON.parse(response.responseText);
                console.log(resJson);
                let chaps = resJson.map(x => x.worksId);
                resolve(chaps);
            }
        });
    });
}

function getChapDetail(chapId) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: API_CHAPTER_DETAIL.replace('{chapter_id}', chapId),
            headers: HEADERS,
            onerror: function (error) {
                console.log(`Get chapter detail error: `, error);
                // reject(error);
            },
            onload: function (response) {
                // console.log(response.responseText);
                let resJson = JSON.parse(response.responseText);
                console.log(resJson);
                let chapName = verifyFileName(chapId + '_' + resJson.name);
                let pics = [];
                let i = 0;
                resJson.pics.forEach(pic => {
                    i += 1;
                    let url = pic.pic.picUrl;
                    let item = {
                        'url': PIC_HOST + url,
                        'file_name': `${i}`.padStart(3, '0') + `.` + url.split('.').pop()
                    };
                    pics.push(item);
                });
                let chapTask = {};
                chapTask[chapName] = pics;
                resolve(chapTask);
            }
        });
    });
}
