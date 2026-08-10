// ==UserScript==
// @name         open-sinaurl
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Description here
// @author       Akuma
// @match        https://weibo.cn/sinaurl?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-open-sinaurl.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-open-sinaurl.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {
    let url = await waitForEle(`#textline`);
    url = url.innerText;
    let icon = document.querySelector('.t-icon');
    icon.style['cursor'] = 'pointer';
    icon.addEventListener('click', _=> {
        window.open(url, '_blank');
    });
}
