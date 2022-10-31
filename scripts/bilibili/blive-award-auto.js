// ==UserScript==
// @name         BliveAwardAuto
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  自动领取直播挂机奖励
// @author       Akuma
// @match        https://live.bilibili.com/*?auto_award=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-award-auto.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-award-auto.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    runWhenLoaded(`div[class^="eventTaskItem_button"`, btnAccept => {
        console.log(`自动领取奖励, btn_text: ${btnAccept.innerText}`);
        autoClick();
    });
}

function autoClick() {
    var btnAccept = document.querySelector('div[class^="eventTaskItem_button"]');
    if (btnAccept.innerText === '领取') {
        btnAccept.click();
        var timeout = 3_000;
        console.log(`已领取, ${parseInt(timeout / 1_000)}s 后领取下一阶段`);
        setTimeout(() => {
            autoClick(btnAccept);
        }, timeout);
    } else {
        console.log(`领取完毕, 即将关闭窗口...`);
        setTimeout(() => {
        var customWindow = window.open('', '_self', '');
            customWindow.close();
        }, 5_000);

    }
}
