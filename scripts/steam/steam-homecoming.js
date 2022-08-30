// ==UserScript==
// @name         SteamHomecoming
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://store.steampowered.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/steam-homecoming.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/steam-homecoming.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject()
})();

function inject() {
    // do stuff
    runWhenLoaded('meta[itemprop="priceCurrency"]', currencyMeta => {
        console.log(`Changing meta[priceCurrency] to CNY`);
        currencyMeta.content = 'CNY';
        // 现在至少 steamDB 的插件现在知道真正的 currency 了, 显示人民币的打折信息
        // steamDB 获取的当前价格 <meta> 里拿到的
        var displayedPrice = document.querySelector('meta[itemprop="price"]');
    });
}
