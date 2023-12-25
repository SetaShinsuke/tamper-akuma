// ==UserScript==
// @name         crawler-gcores-articles
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Get pictures in gcores articles
// @author       Akuma
// @match        https://www.gcores.com/articles/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-articles.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-gcores-articles.js
// ==/UserScript==

// https://www.gcores.com/gapi/v1/articles/166772
const API_ARTICLE = 'https://www.gcores.com/gapi/v1/articles/#{article_id}?include=user';
const IMAGE_HOST = 'https://image.gcores.com/';

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    let referer = `${window.location.protocol}//${window.location.host}`
    let HEADERS = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Referer": referer,
        "Origin": referer
    }
    var tasks = {};
    tasks['config'] = {};
    tasks['config']['referer'] = referer;
    // 系列名称
    let author = document.querySelector('.avatar_text')?.innerText;
    // undefined ?? '' == ''
    let bookName = document.querySelector('.redirectEntry-portfolios h3')?.childNodes[0]?.textContent;
    bookName = bookName ?? '';
    bookName = verifyFileName(`[${bookName}][${author}]`);
    tasks['config']['book_name'] = bookName;

    // 拉取信息
    let articleId = window.location.pathname.match(/\/articles\/(.*)/)[1];
    let requestUrl = API_ARTICLE.replace('#{article_id}', articleId);
    console.log(requestUrl);
    GM_xmlhttpRequest({
        method: "GET",
        url: requestUrl,
        headers: HEADERS,
        onerror: function (error) {
            console.log('Get article error: ', error);
        },
        onload: function (response) {
            console.log(response);
            let res = response;
            // console.log(response.responseText);
            let resJson = JSON.parse(response.responseText);
            console.log(resJson);
            let chapName = resJson.data.attributes.title;
            chapName = verifyFileName(chapName).replace(/原创漫画丨/, '');
            // chapId = articleId
            chapName = `${articleId}_${chapName}_${bookName}[gco]`;
            if (!bookName) { // 无[系列名称]，用[章节名称]代替
                bookName = chapName;
            }
            tasks[chapName] = [];
            // todo: 封面
            let coverPath = resJson.data.attributes.cover;
            tasks[chapName].push({
                'url': `${IMAGE_HOST}` + coverPath,
                'file_name': `000_cover${coverPath.match(/(\.[^.]+)$/)[1]}`
            });
            // 图片列表
            let content;
            try {
                content = JSON.parse(resJson.data.attributes.content).entityMap;
            } catch (e) {
                alert('No pic data found!');
                return;
            }
            var index = 0;
            Object.keys(content).forEach(k => {
                let item = content[k];
                if (item.type.toLowerCase() === 'image') {
                    let filePath = item.data.path;
                    let url = `${IMAGE_HOST}` + filePath;
                    let ext = filePath.match(/(\.[^.]+)$/)[1];
                    let fileName = `${index += 1}`.padStart(3, '0') + ext;
                    tasks[chapName].push({'url': url, 'file_name': fileName});
                }
            });

            console.log(tasks);
            // 保存
            var save_name = `tasks_${chapName}.json`;
            console.log(save_name);
            saveTextFile(JSON.stringify(tasks), save_name);
        }
    });
}
