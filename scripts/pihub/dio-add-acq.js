// ==UserScript==
// @name         DioAddAcq
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  添加 Acquisition
// @author       Akuma
// @match        https://store.epicgames.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @connect      http://captaintito.zicp.io
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// ==/UserScript==

const HOST = 'http://captaintito.zicp.io:2210';

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // todo: 跳转到 pihub - Acq 添加页
    let hostname = document.location.hostname;
    console.log(`Host: ${hostname}`);
    switch (hostname) {
        case 'store.epicgames.com':
            injectEpic();
            break
    }
}

function injectEpic() {
    let skuPath = window.location.pathname.match(/\/p\/(.*)/);
    if (skuPath) {
        let sku = skuPath[1];
        var currency = 'USD';
        try {
            let data = JSON.parse(document.querySelector('#_schemaOrgMarkup-Product').innerText);
            currency = data.offers[0].priceCurrency;
            var accountId = 8;
            var region = 'US';
            if (currency === 'CNY') {
                accountId = 10;
                region = 'CN';
            }
            let name = data.name.replace(/《(.*)》/, '$1');
            var orgPrice = data.offers[0].priceSpecification.price*100;
            if(data.offers.length > 1){
                orgPrice = data.offers[1].priceSpecification.price*100;
            }
            var url = `${HOST}/pages/#/dio/main/new`
                + `?sku=${sku}&platform=epic&name=${name}&org_name=${name}&account_id=${accountId}`
                + `&acq_method=free&acq_date=${(new Date()).toDateString()}&currency=${currency}`
                + `&acq_price=0&org_price=${orgPrice}&media_format=digital&region=${region}`
            console.log(url);
            GM_openInTab(url, false);
        } catch (e) {
            console.log(e);
            alert('获取游戏信息出错!' + e.message)
        }
    } else {
        alert('未找到游戏详情!');
    }
}
