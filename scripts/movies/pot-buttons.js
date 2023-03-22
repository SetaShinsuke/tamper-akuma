// ==UserScript==
// @name         PotButtons
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  获取视频地址，使用potplayer播放(适用于: Yanetflix[NetflixLZ, 多多]; 樱花动漫;  )
// @author       Akuma
// @match        https://yanetflix.com/vodplay/*
// @match        https://www.yhdmp.cc/vp/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/pot-buttons.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/pot-buttons.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    var queryString = 'iframe';
    switch (window.location.hostname) {
        case 'yanetflix.com':
            queryString = '#playleft>iframe';
            break
        case 'yhdmp.cc':
            queryString = 'iframe';
            break
    }


    runWhenLoaded(queryString, iframe => {
        // let url = unescape(iframe.src.replace(/.*&url=(.*.m3u8)/, '$1'));
        let url = unescape(iframe.src.replace(/.*&url=(.*m3u8).*/, '$1'));
        let playLink = `potplayer://${url}`;
        console.log(`PlayLink: ${playLink}`);
        addButton("复制播放链接", {
            top: '1%'
        }, ()=>{
            copyToClipboard(url);
            alert("链接已复制!\n" + url);
        });

        addButton("使用potplayer播放",
            {
                top: '8%'
            }, btn => {
                // 打开
                setTimeout(() => {
                    GM_openInTab(playLink, false);
                }, 1000);
            });
    });
}
