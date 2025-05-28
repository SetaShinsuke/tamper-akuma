// ==UserScript==
// @name         we_read_auto
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Description here
// @author       Akuma
// @match        https://weread.qq.com/web/reader/22732c80813ab875cg017a80*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weixin/we_read_auto.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weixin/we_read_auto.js
// ==/UserScript==

const STEP = 20_000; // 20s翻一次页面
const MAX_STEP = 3*6; // 6分钟

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {
    let btnNextPage = await waitForEle('.renderTarget_pager_button_right').catch(e => console.log(e));
    let btnPrePage = document.querySelector(`.renderTarget_pager_button`);
    let counter = 0;
    console.log('开始自动阅读');
    let task = setInterval(function () {
        counter += 1;
        console.log(`counter: ${counter}, 已阅读 ${(counter * STEP / 60_000).toFixed(2)}min`);
        if (counter > MAX_STEP) {
            console.log(`任务结束，自动关闭页面`);
            clearInterval(task);
            // window.close();
        }
        if (counter % 6 < 4) {
            console.log(`点击下一页`);
            btnNextPage.click();
        } else {
            console.log(`点击上一页`);
            btnPrePage.click();
        }

    }, STEP)
}