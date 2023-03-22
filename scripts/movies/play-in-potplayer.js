// ==UserScript==
// @name         PlayInPotPlayer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to play the video in potplayer
// @author       Akuma
// @match        https://open.163.com/newview/movie/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/play-in-potplayer.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/movies/play-in-potplayer.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    let url = ''
    switch (window.location.hostname) {
        case 'open.163.com':
            url = document.querySelector('video')?.src;
            break
    }

    if(!url){
        alert('未找到视频 url!');
        return
    }
    let playLink = `potplayer://${url}`;
    console.log(`PlayLink: ${playLink}`);
    // 打开
    setTimeout(() => {
        GM_openInTab(playLink, false);
    }, 1000);
}
