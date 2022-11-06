// ==UserScript==
// @name         HezhimengPotplayer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  和之梦: 跳转到 Potplayer 播放视频
// @author       Akuma
// @match        https://www.hezhimeng.cn/videoDet.html?videoId=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/hezhimeng-potplayer.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/hezhimeng-potplayer.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    runWhenLoaded('video', video => {
        let url = video.src;
        var videoName = url.replace('http://wxres.hezhimeng.cn/', '');
        var playLink = `potplayer://` + url.replace(videoName, escape(videoName));
        // var title = document.querySelector('h3.title').innerText.match(/【.*】/)[0].replace(/【(.*)】/,'$1');
        var title = document.querySelector('h3.title').innerText.match(/[【\[](.*)[】\]]/)[1];
        var text = `[${title}](${playLink})`;

        console.log(`PlayLink: ${playLink}`);
        addButton("复制播放链接", {
            top: '1%'
        }, ()=>{
            copyToClipboard(url);
            alert("链接已复制!\n" + url);
        });

        addButton("复制PotPlayer链接", {
            top: '8%'
        }, btn => {
           copyToClipboard(text);
           alert("链接已复制!\n" + text);
        });

        addButton("使用potplayer播放",
            {
                top: '15%'
            }, btn => {
                // 打开
                setTimeout(() => {
                    GM_openInTab(playLink, false);
                }, 1000);
            });
    });
}
