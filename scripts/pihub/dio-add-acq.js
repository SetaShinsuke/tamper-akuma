// ==UserScript==
// @name         DioAddAcq
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  添加 Acquisition
// @author       Akuma
// @match        https://store.epicgames.com/*
// @match        https://www.xbox.com/*/games/store/*
// @match        https://store.steampowered.com/app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-add-acq.js
// ==/UserScript==

const HOST = 'http://192.168.50.166:9292';
const ACCOUNT_EPIC = 8;
const ACCOUNT_EPIC_CN = 10;
const ACCOUNT_XBOX = 9;
const ACCOUNT_STEAM = 1;
const ACCOUNT_STEAM_ALT = 4;

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // 跳转到 pihub - Acq 添加页
    let hostname = document.location.hostname;
    console.log(`Host: ${hostname}`);
    switch (hostname) {
        case 'store.epicgames.com':
            injectEpic();
            break
        case 'www.xbox.com':
            injectXbox();
            break
        case 'store.steampowered.com':
            injectSteam();
            break
    }
}

function injectSteam() {
    runWhenLoaded(`.game_area_purchase_game`, div => {
        let sku = document.location.pathname.match(/\/app\/(.*?)\//)[1];
        let name = document.querySelector('#appHubAppName').innerText;
        name = name.replace(/《(.*)》/, '$1')
        let currency = document.querySelector(`[itemprop="priceCurrency"]`)?.content;
        if(!currency){
            currency = 'CNY';
        }
        var accountId = ACCOUNT_STEAM;
        if(document.querySelector(`.persona.online`)?.innerText === 'woolenpants'){
            accountId = ACCOUNT_STEAM_ALT;
        }
        var orgPrice = 0;
        // 没打折
        var priceStr = document.querySelector(`.game_purchase_price.price`)?.dataset?.priceFinal;
        // 打折中
        if(!priceStr){
            priceStr = div.querySelector('.discount_original_price')?.innerText;
            if(priceStr){
                orgPrice = parseInt(priceStr.replace(/[$¥]\s/, '')) * 100;
            }
            // 当前折后价格
            let orgPriceStr = div.querySelector('.discount_final_price')?.innerText;
            if(orgPriceStr){
                orgPrice = parseInt(orgPriceStr.replace(/[$¥]\s/, '')) * 100;
            }
        }
        var url = `${HOST}/pages/#/dio/main/new`
            + `?sku=${sku}&platform=steam&name=${name}&org_name=${name}&account_id=${accountId}`
            + `&acq_method=buy&acq_date=${(new Date()).toDateString()}&currency=${currency}`
            + `&acq_price=0&org_price=${orgPrice}&media_format=digital&region=CN`;
        console.log(url);
        GM_openInTab(url, false);
    });
}

function injectXbox() {
    runWhenLoaded(`[class^='Price-module']`, priceTag => {
       let priceStr = priceTag.innerText;
       try {
           // var sku = JSON.parse(document.querySelector(`#PageContent>div`).dataset['m']).pid;
           var sku = document.location.pathname.match(/store\/(.*)/)[1];
           var name = JSON.parse(document.querySelector(`#PageContent>div`).dataset['m']).prod;
           name = name.replace(/《(.*)》/, '$1')
           var currency = 'USD';
           var region = 'US';
           var regionText = priceStr.split('$')[0];
           if(regionText === 'HK'){
               currency = 'HKD';
               region = 'HK';
           }
           var orgPrice = priceStr.split('$')[1];
           orgPrice = parseInt(parseFloat(orgPrice) * 100);
           var url = `${HOST}/pages/#/dio/main/new`
               + `?sku=${sku}&platform=xbox&name=${name}&org_name=${name}&account_id=${ACCOUNT_XBOX}`
               + `&acq_method=vip&acq_date=${(new Date()).toDateString()}&currency=${currency}`
               + `&acq_price=0&org_price=${orgPrice}&media_format=digital&region=${region}`
           console.log(url);
           GM_openInTab(url, false);
       }catch (e) {
           console.log(e);
           alert('获取游戏信息出错!' + e.message)
       }
    });
}

function injectEpic() {
    let skuPath = window.location.pathname.match(/\/p\/(.*)/);
    if (skuPath) {
        let sku = skuPath[1];
        var currency = 'USD';
        try {
            let data = JSON.parse(document.querySelector('#_schemaOrgMarkup-Product').innerText);
            currency = data.offers[0].priceCurrency;
            var accountId = ACCOUNT_EPIC;
            var region = 'US';
            if (currency === 'CNY') {
                accountId = ACCOUNT_EPIC_CN;
                region = 'CN';
            }
            let name = data.name.replace(/《(.*)》/, '$1');
            name = name.replace(`&#39;`, `'`)
            // var orgPrice = data.offers[0].priceSpecification.price*100;
            // if(data.offers.length > 1){
            //     orgPrice = data.offers[1].priceSpecification.price*100;
            // }

            // let orgPrice = parseFloat(document.querySelectorAll('aside>div>div>div')[2]
            //     .querySelector('div>span').innerText.substr(3)) * 100
            let orgPrice = 0;
            let priceStr = document.querySelector('aside>div>div').innerText.match(/[$¥](.*)\n/);
            if(priceStr && priceStr.length > 0){
                priceStr = priceStr[1];
                orgPrice = parseInt(parseFloat(priceStr) * 100);
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
