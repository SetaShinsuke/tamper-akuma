// ==UserScript==
// @name         BMangaExchange
// @namespace    http://tampermonkey.net/
// @version      0.6.1
// @description  弃用!!Auto exchange bilibili manga credits for global-welfare-coupon
// @author       Akuma
// @match        https://manga.bilibili.com/eden/credits-exchange.html?refresh=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-manga-credits-exchange.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bilibili-manga-credits-exchange.js
// ==/UserScript==

var TIMEOUT_DEFAULT = 5_000;
// 兑换页: https://manga.bilibili.com/eden/credits-exchange.html?refresh=true

console.log('starting inject');

(function () {
    'use strict';
    window.addEventListener('load', (x) => {
        console.log('window loaded');
        try {
            onReady();
        } catch (e) {
            console.error(e);
        }
    });
})();

function onReady() {
    // 验证第一个是不是通用券
    var firstItem = document.querySelector('.manga-item');
    var firstExpected = true;
    if (!firstItem || !firstItem.innerHTML.includes('global-welfare-coupon')) {
        console.log('First item not expected!Refreshing...')
        firstExpected = false;
    } else {
        console.log('第一个是通用券, 准备自动抢券');
    }

    var btn = document.querySelector('.action-btn');
    console.log('btn: ');
    console.log(btn);
    // var btn = document.querySelectorAll('.action-btn')[24];
    var urlParams = new URLSearchParams(document.location.search);
    // 当前积分
    var creditDiv = document.querySelector('.my-credit');
    var credits = -1;
    try {
        credits = parseInt(creditDiv.innerHTML.replace('赛季积分：', ''));
        if (isNaN(credits)) {
            credits = -1;
        }
    } catch (e) {
        console.log(e);
    }
    console.log(`当前积分: ${credits}`);
    // 检查时间
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(`时间: ${date.getHours()}:${date.getMinutes()}`);
    // // 12:02 之后不再刷新
    if (!urlParams.get('refresh') || (credits >= 0 && credits < 100)
        || hours < 11 || (hours === 11 && minutes < 50)
        || hours > 12 || (hours === 12 && minutes > 1)) {
        console.log(credits);
        console.log(urlParams.get('refresh'));
        console.log('不自动刷新');
        return;
    }
    var isDisabled = btn.classList.contains('disabled');
    if (isDisabled || !firstExpected || credits < 0 || !btn) {
        console.log('兑换按钮不可用');
        // 没刷出来，重新加载
        // todo: 按时间改变刷新频率
        var timeout = 30_000;
        if (minutes >= 0 && minutes < 2) {
            timeout = TIMEOUT_DEFAULT;
            try {
                var timeoutPar = parseInt(urlParams.get('refresh')) * 1000;
                if (!isNaN(timeoutPar)) {
                    timeout = timeoutPar;
                }
            } catch (e) {
                console.log(e);
            }
        } else if (minutes < 55) {
            timeout = 2 * 60_000;
        }
        console.log(`${timeout / 1_000}s 后刷新页面...`);
        setTimeout(() => {
            window.location.reload();
        }, timeout);
    } else { // 刷出来按钮
        btn.click();
        setTimeout(() => { // 数量 +5
            var i = 0;
            var appendTask = setInterval(() => {
                var addBtn = document.querySelector('.right-hot-area')
                if (!addBtn) {
                    clearInterval(appendTask);
                    return
                }
                addBtn.click();
                i = i + 1;
                console.log(`+1, i = ${i}`);
                if (i === 5) {
                    clearInterval(appendTask);
                    // 点击兑换
                    setTimeout(clickExchange, 200);
                    // 不管兑换是否成功, 3秒后刷新页面
                    setTimeout(() => {
                        window.location.reload();
                    }, 3_000);
                }
            }, 100);
        }, 200);
    }
    // todo: 兑换完成, 跳转到不刷新的页面
    var resultUrl = window.location.origin + '' + window.location.pathname;

    // 点击空白，隐藏数量弹窗
    // document.querySelector('.confirm-popup-wrapper').click()
}

function clickExchange() {
    var btnExchange = document.querySelector('.action-button');
    if (btnExchange) {
        console.log('点击兑换');
        console.log(`兑换数量: ${document.querySelector('.quantity-number').innerText}`);
        btnExchange.click();
        // alert('点击兑换!');
        // console.log(btnExchange);
        // todo: 验证兑换是否成功!!
    }
}