// ==UserScript==
// @name         crawler-wx
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://mp.weixin.qq.com/s?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/crawler-base.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wx.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-wx.js
// ==/UserScript==

let DO_SAVE = true;
let NEXT_TIMEOUT = 3_000;
let EX_CONFIGS = {};

class CrawlerImpl extends CrawlerBase {

    findBookName() {
        return new Promise((resolve, reject) => {
            let bookName = publicTagInfo[0]?.title;
            bookName = bookName ?? document.querySelector('.wx_tap_link.js_album_directory__name').innerText.replace(' · 目录', '');
            bookName = verifyFileName(bookName);
            console.log(`bookName: ` + bookName);
            resolve(bookName);
        });
    }

    findChapIndex() {
        return new Promise((resolve, reject) => {
            let list = Array.from(document.querySelectorAll('.album_read_directory_item'));
            let chapIndex = undefined;
            for (let i = 0; i < list.length; i++) {
                if (list[i].classList.contains('album_read_directory_current')) {
                    chapIndex = i + 1;
                    break;
                }
            }
            console.log(`chapIndex: ${chapIndex}`);
            resolve(chapIndex);
        });
    }

    findChapName() {
        return new Promise((resolve, reject) => {
            let chapName = verifyFileName(msg_title);
            console.log(`chapName: ` + chapName);
            resolve(chapName);
        });
    }

    findPicUrls() {
        return new Promise((resolve, reject) => {
            let picUrls = Array.from(document.querySelectorAll('img.rich_pages.js_insertlocalimg')).map(img => {
                return img.getAttribute('data-src');
            });
            console.log(`picUrls: \n`, picUrls);
            resolve(picUrls);
        });
    }

    findFileExt() {
        return new Promise(resolve => {
            resolve('.jpg')
        });
    }

    findNextChapUrl() {
        return new Promise(async (resolve, reject) => {
            let list = Array.from(document.querySelectorAll('.album_read_directory_item'));
            let nextIndex = await this.findChapIndex();
            console.log(`nextIndex: `, nextIndex);
            let nextChapUrl = list[nextIndex]?.getAttribute('data-url');
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
    let crawler = new CrawlerImpl();
    let remain = crawler.getRemainCount();
    let onClick = async () => {
        // 展开目录
        let btnVols = await waitForEle('.album_read_source');
        btnVols.click();
        await sleep(1_000);
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