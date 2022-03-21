// ==UserScript==
// @name         WBMobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  从手机版网页跳转到PC网页
// @author       Akuma
// @match        https://m.weibo.cn/status/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo-mobile-web.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo-mobile-web.js
// ==/UserScript==
(function () {
    'use strict';

    window.addEventListener('load', (x) => {
        console.log('window loaded');
        setTimeout(() => {
            inject();
        }, 3000)
    });
})();

function inject() {
    // todo: 视频地址
    var videoUrl = $render_data.status.page_info.media_info.stream_url_hd;

    // 点击“时间戳”，跳转到PC网页版页面
    var timeLink = document.querySelector('.time');
    if (!timeLink) {
        return;
    }
    var bid = $render_data.status.bid;
    var uid = $render_data.status.user.id;
    timeLink.href = `https://weibo.com/${uid}/${bid}`;
    console.log(`Status url: ${timeLink.href}`);
    timeLink.addEventListener('click', () => {
        window.open(timeLink.href, '_blank').focus();
    });
}