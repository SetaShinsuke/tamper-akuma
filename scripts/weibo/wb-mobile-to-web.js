// ==UserScript==
// @name         WBMobile
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  从手机版网页跳转到PC网页
// @author       Akuma
// @match        https://m.weibo.cn/status/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-mobile-to-web.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-mobile-to-web.js
// ==/UserScript==
(function () {
    'use strict';

    console.log('Wb mobile page loaded');
    inject();
})();

function inject() {
    // 点击“时间戳”，跳转到PC网页版页面
    runWhenLoaded('.time', timeLink=>{
        var bid = $render_data.status.bid;
        var uid = $render_data.status.user.id;
        timeLink.href = `https://weibo.com/${uid}/${bid}`;
        console.log(`Status url: ${timeLink.href}`);
        timeLink.addEventListener('click', () => {
            window.open(timeLink.href, '_blank').focus();
        });
    });

    // todo: 点击复制视频地址
    runWhenLoaded(`.card-video`, () => {
        var videoUrl = $render_data.status.page_info.media_info.stream_url_hd;
        console.log(`Video url: ${videoUrl}`);
    });
}