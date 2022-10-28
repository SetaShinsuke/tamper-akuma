// ==UserScript==
// @name         HezhimengPotplayer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  跳转到 Potplayer 播放视频
// @author       Akuma
// @match        https://www.hezhimeng.cn/videoDet.html?videoId=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/userscript.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/userscript.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    runWhenLoaded('video', video => {
       let src = video.src;
       var videoName = src.replace('http://wxres.hezhimeng.cn/', '');
       var link = `potplayer://` + src.replace(videoName, escape(videoName));
       var title = document.querySelector('h3.title').innerText.match(/【.*】/)[0].replace(/【(.*)】/,'$1');
       var text = `[${title}](${link})`;
        copyToClipboard(text);
        toast('链接已复制!');
        setTimeout(()=>{
            GM_openInTab(link, false);
        }, 1000);
    });
}
