// ==UserScript==
// @name         CheckLargePic
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Right click to check large pic
// @author       Akuma
// @match        https://manga.hdslb.com/bfs/manga/*
// @match        https://i0.hdslb.com/bfs/manga-static/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @run-at       context-menu
// @connect      manga.bilibili.com
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-large-pic.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-large-pic.js
// ==/UserScript==

// 2024.3.27: 此脚本已废，所有原接口的图片 path 都不完整，需要重新获取 imageIndex
// 也就是说不能通过这个 path 去拿 token 了

let BM_IMAGE_TOKEN = "https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken?device=android&platform=android";
let HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": "https://manga.bilibili.com",
    "Origin": "https://manga.bilibili.com"
};

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    console.log(`Get image token...`);
    let filePath = window.location.pathname;
    filePath = filePath.replace(/@.*/, '');
    var res;
    GM_xmlhttpRequest({
        method: "POST",
        url: BM_IMAGE_TOKEN,
        headers: HEADERS,
        data: `urls=["${filePath}"]`,
        onerror: function (error) {
            console.log(`Get image token error: `, error);
        },
        onload: function (response) {
            // console.log(response);
            res = response;
            console.log(response.responseText);
            var resJson = JSON.parse(response.responseText);
            var code = resJson.code;
            if (code !== 0) {
                console.log(`获取ImageToken失败!\nMsg: ${resJson.msg}`);
                return
            }
            let data = resJson['data'][0];
            let url = `${data['url']}?token=${data['token']}`;
            console.log(url);
            GM_openInTab(url, false);
        }
    });
}
