// ==UserScript==
// @name         Yanetflix-Playlink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  获取视频地址，使用potplayer播放(适用于 NetflixLZ, 多多,  )
// @author       Akuma
// @match        https://yanetflix.com/vodplay/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/yanetflix-playlink.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/yanetflix-playlink.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    addButton("使用potplayer播放",
        {
            top: '',
            bottom: '10px',
            right: '10px',
            left: ''
        }, btn => {
            runWhenLoaded('#playleft>iframe', iframe => {
                let url = iframe.src.replace(/.*&url=(.*)/, '$1');
                let link = `potplayer://${url}`;
                console.log(`link: ${link}`);
                setTimeout(() => {
                    GM_openInTab(link, false);
                }, 1000);
            });
        })
}
