// ==UserScript==
// @name         EHenTaiGallery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  扒取 e-hentai.org 的图片 url
// @author       Akuma
// @match        https://e-hentai.org/s/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/e-hentai-gallery.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/e-hentai-gallery.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

const DURATION = 1_500;

function inject() {
    // 只要有值就视为爬取中
    var isCrawling = localStorage.getItem('is_crawling');
    var btnText = '开始爬取';
    if (isCrawling) {
        btnText = '中止爬取';
    }

    var btnId = addButton(btnText, {top: '1%'}, event => {
        if (localStorage.getItem('is_crawling')) {
            stopCrawling(event.target)
            return
        }
        startCrawling(event.target);
    });

    addButton('清除任务', {top: '8%'}, () => {
        localStorage.removeItem('tasks');
        stopCrawling(document.getElementById(btnId));
        console.log(`任务清除`);
        alert(`任务已清除!`)
    });

    addButton('导出', {top: '15%'}, () => {
        console.log(`点击导出`);
        var bookName = document.querySelector('h1').innerText;
        bookName = verifyFileName(bookName);
        var taskJson = localStorage.getItem('tasks');
        if (taskJson) {
            var tasks = JSON.parse(taskJson);

            tasks['config'] = {};
            tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
            tasks['config']['book_name'] = bookName;

            var save_name = `tasks_${bookName}_${Date.now()}.json`;
            console.log(save_name);
            saveTextFile(JSON.stringify(tasks), save_name);
        } else {
            alert('未获取到 tasks！')
        }
    });

    if (isCrawling) {
        runWhenLoaded('#img', img => {
            // todo: 爬取
            let imgUrl = img.src;
            var chapterName = document.querySelector('h1').innerText;
            chapterName = verifyFileName(chapterName);
            var taskJson = localStorage.getItem('tasks');
            var tasks = {};
            if (taskJson) {
                tasks = JSON.parse(taskJson);
            } else {
                tasks[chapterName] = [];
            }
            let ext = imgUrl.split('.').pop();
            let page = document.querySelector('.sn>div>span').innerText;
            let fileName = `${page.padStart(4, '0')}.${ext}`;
            if(!tasks[chapterName]){
                tasks[chapterName] = [];
            }
            let item = {'url': imgUrl, 'file_name': fileName, 'page': page};
            console.log(`爬取当前页...${fileName}`);
            console.log(item);
            tasks[chapterName].push(item);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // 最后一页
            let nextUrl = document.querySelector('#next')?.href;
            if (location.href === nextUrl) {
                console.log(`爬取结束!`);
                stopCrawling(document.getElementById(btnId));
                alert(`爬取结束!`);
            } else {
                // 到下一页
                console.log(`${DURATION}ms 后跳转到下一页`);
                setTimeout(() => {
                    window.open(nextUrl, '_self');
                }, DURATION);
            }
        })
    }
}

function startCrawling(btn) {
    console.log(`清除 localStorage['tasks']`);
    localStorage.removeItem('tasks');
    localStorage.setItem('is_crawling', 'true');
    console.log(`开始爬取...`);
    btn.textContent = '中止爬取';
    location.reload();
}

function stopCrawling(btn = null) {
    localStorage.removeItem('is_crawling');
    btn.textContent = '开始爬取';
    console.log(`Stop crawling`);
}
