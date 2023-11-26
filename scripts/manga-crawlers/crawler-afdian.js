// ==UserScript==
// @name         Crawl-Afdian
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  爬取爱发电的漫画
// @author       Akuma
// @match        https://afdian.net/album/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-afdian.js
// ==/UserScript==

const API_POST_DETAIL = `https://afdian.net/api/post/get-detail?post_id={POST_ID}`; // &album_id={ALBUM_ID}

let referer = `${window.location.protocol}//${window.location.host}`;
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": referer,
    "Origin": referer
};

(function () {
    'use strict';
    console.log('Ready to crawl.')
    // setTimeout(getTasks, 2_000);
    toast('正在爬取...');
    getTasks();
})();

async function getTasks() {
    var tasks = {};
    var bookNameOrg = document.querySelector('.tit').innerText;
    var bookName = verifyFileName(bookNameOrg);
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var index = document.querySelector('.flex-box.gl-hover-text').children[2].innerText.replace(' / ', '');
    index = parseInt(index);
    if (isNaN(index)) {
        index = (new Date()).getTime();
    } else {
        index = `${index}`.padStart(4, '0');
    }
    var chapName = document.querySelector('.title-box').innerText.replace(`${bookNameOrg} `, '');
    chapName = verifyFileName(`${index}_${chapName}`);
    tasks[chapName] = [];

    var imgs = document.querySelectorAll('.article-box>p>img');
    if (!imgs || imgs.length === 0) { // 可能在img-box里(而非article-box)
        try {
            let albumId = window.location.pathname.match(/\/album\/(.*)\/(.*)/)[1];
            let postId = window.location.pathname.match(/\/album\/(.*)\/(.*)/)[2];
            await fetchPostDetail(postId).then(pics => {
                imgs = pics.map(pic => {
                    return {'src': pic};
                });
            });
        } catch (e) {
            console.log(e);
            alert('No pics found!');
            return
        }
    }

    var i = 0;
    imgs.forEach(img => {
        // 'https://pic1.afdiancdn.com/user/6f4f9c4a967e11e9aec452540025c377/common/1affc42bed4cdacc35cec60cc43220e3_w800_h1163_s371.jpg?imageView2/2/w/640'
        var url = img.src.split('?')[0];
        i += 1;
        var fileName = `${index}_` + `${i}`.padStart(4, '0') + '.' + url.split('.').pop();
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });

    console.log(tasks);

    // 保存
    var save_name = `tasks_${index}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);

    // 选中下一章
    var btnNext = document.querySelector('.vm-feed>.flex-box.mt16').lastChild;
    btnNext.href += '?save=true';
    btnNext.focus();
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