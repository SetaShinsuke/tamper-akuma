// ==UserScript==
// @name         Crawler-Wb-Album
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  爬取微博相册的图, 参数 pic_size 设置大小(orj360, mw2000, large, woriginal)
// @author       Akuma
// @match        https://photo.weibo.com/*/albums/detail/album_id/*/mode/3/*
// @match        https://weibo.com/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wb-album.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wb-album.js
// ==/UserScript==

// 微博图片尺寸:orj360, mw2000, large, woriginal

(function () {
    'use strict';
    console.log('Ready to crawl.')
    let type = 'post';
    if (/albums/.test(window.location.pathname)) {
        fetchAlbum();
    } else {
        let urlParams = new URLSearchParams(document.location.search);
        let picSize = urlParams.get('pic_size');
        fetchPost(picSize || 'woriginal');
    }
})();

function fetchPost(picSize) {
    var tasks = {};
    let author = document.querySelector(`header a[class*='head_cut']>span`)?.textContent;
    var bookName = verifyFileName(`${author}的WB`);
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    let postId = window.location.pathname.replaceAll('/', '_');
    let chapName = postId + '';
    let contentMatch = document.querySelector(`div[class*='detail_wbtext']`)?.textContent?.match(/《(.*?)》/);
    if (contentMatch?.length > 1) {
        // XXX作品_postId
        chapName = contentMatch[1] + chapName;
    }
    console.log('chapter name: ' + chapName);
    tasks[chapName] = [];
    var imgs = document.querySelectorAll(`div[class*='picture-box'] img`);
    imgs = Array.from(imgs);
    var i = 0;
    imgs.forEach(img => {
        var url = img.src.replace('/orj360', `/${picSize}`);
        i += 1;
        var fileName = `${i}`.padStart(4, '0') + `.${url.split('.').pop()}`;
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${bookName}_${chapName}_${(new Date).getTime()}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
    // 复制所有图片链接，以备手动下载
    let downloadLinks = tasks[chapName].map(task => task.url).join('\n');
    console.log('Download links:\n', downloadLinks);
    copyToClipboard(downloadLinks);
}

function fetchAlbum() {
    var tasks = {};
    var bookName = document.querySelector('strong').innerText;
    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    var chapName = document.querySelector('.list>a>span.t').innerText.replaceAll(' ', '');
    tasks[chapName] = [];
    var imgs = document.querySelector('.photoList').querySelectorAll('img');
    imgs = Array.from(imgs).reverse();
    var i = 0;
    imgs.forEach(img => {
        var url = img.src.replace('/square', '/large');
        i += 1;
        var fileName = `${i}`.padStart(4, '0') + `.${url.split('.').pop()}`;
        tasks[chapName].push({'url': url, 'file_name': fileName});
    });
    console.log(tasks);

    // 保存
    var save_name = `tasks_${(new Date).getTime()}.json`;
    console.log(save_name);
    saveTextFile(JSON.stringify(tasks), save_name);
}