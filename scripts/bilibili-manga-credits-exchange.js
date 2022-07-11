// ==UserScript==
// @name         BMangaExchange
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto exchange bilibili manga credits for global-welfare-coupon
// @author       Akuma
// @match        https://manga.bilibili.com/eden/credits-exchange.html?refresh=true
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili-manga-credits-exchange.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili-manga-credits-exchange.js
// ==/UserScript==

var TIMEOUT = 3000;
var END_MIN = 5; //12:05分停止刷新
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
    if (!firstItem || !firstItem.innerHTML.includes('global-welfare-coupon')) {
        return;
    }
    console.log('第一个是通用券, 准备自动抢券');

    var btn = document.querySelector('.action-btn');
    // var btn = document.querySelectorAll('.action-btn')[24];
    var urlParams = new URLSearchParams(document.location.search);
    // var date = new Date();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // // 12:05 之后不再刷新
    if (!urlParams.get('refresh') || !btn) {
        //     || hours < 11 || (hours === 11 && minutes < 55)
        //     || hours > 12 || (hours === 12 && minutes > END_MIN)) {
        console.log('不自动刷新');
        return;
    }
    var isDisabled = btn.classList.contains('disabled');
    if (isDisabled) {
        // 没刷出来，重新加载
        // todo: 按时间改变刷新频率
        // var timeout = 60_000;
        // if (minutes > 0 && minutes < END_MIN) {
        //     timeout = 500;
        // }
        // setTimeout(() => {
        //     window.location.reload();
        // }, timeout);
        console.log('兑换按钮不可用');
    } else { // 刷出来按钮
        btn.click();
        setTimeout(() => { // +5
            document.querySelector('.right-hot-area').click();
            document.querySelector('.right-hot-area').click();
            document.querySelector('.right-hot-area').click();
            document.querySelector('.right-hot-area').click();
            // 点击兑换
            setTimeout(clickExchange, 200);
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