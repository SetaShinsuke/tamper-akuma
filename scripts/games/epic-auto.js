// ==UserScript==
// @name         EpicAuto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动领取 epic 游戏
// @author       Akuma
// @match        https://store.epicgames.com/*?auto=true
// @match        https://store.epicgames.com/*/p/*?auto=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
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
    if (/\/p\//.test(document.location.pathname)) {
        console.log(`游戏详情页，准备自动领取...`);
        runWhenLoaded(`[data-testid="purchase-cta-button"]`, btn => {
            console.log(`点击获取按钮...`);
            btn.click();
            runWhenLoaded(`.payment-order-confirm__btn`, btnConfirm => {
                console.log(`点击订单确认按钮...`);
                btnConfirm.click();
            })
        });
    } else {
        console.log(`准备开始自动领取...`);
        runWhenLoaded(`section>div>div>div>div>a`, link => {
            // if (/\?/.test(link.href)) {
            //     link += '&auto=true';
            // }else {
            // }
            link.href += '?auto=true';
            console.log(`找到免费条目，自动跳转...link: ${link.href}`);
            GM_openInTab(link.href, false);
            // link.click();
        });
    }
}
