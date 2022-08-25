// ==UserScript==
// @name         BM-Exchange-Ex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto exchange bilibili manga credits for global-welfare-coupon
// @author       Akuma
// @match        https://manga.bilibili.com/eden/credits-exchange.html?auto=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @grant        GM_xmlhttpRequest
// @connect      *
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-exchange-ex.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-exchange-ex.js
// ==/UserScript==

var TIMEOUT = 5_000;
var API_GET_POINTS = `https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetUserPoint?device=pad&platform=ios`;
var API_EXCHANGE = `https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/Exchange?device=pad&platform=ios`;

(function () {
    'use strict';
    console.log(`starting inject in ${parseInt(TIMEOUT / 1000)} seconds...`);
    setTimeout(onReady, TIMEOUT);
})();

function onReady() {
    // 查积分
    var res;
    GM_xmlhttpRequest({
        method: "POST",
        url: API_GET_POINTS,
        data: "ep_id=379397",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Referer": "https://manga.bilibili.com",
            "Origin": "https://manga.bilibili.com"
        },
        onerror: function (error) {
            console.log(`Get user points error: `, error);
        },
        onload: function (response) {
            console.log(response);
            res = response;
            console.log(res.responseText);
            var resJson = JSON.parse(response.responseText);
            var code = resJson.code;
            if (code !== 0) {
                alert(`获取积分信息失败!\nMsg: ${resJson.msg}`);
                return
            }
            var points = parseInt(resJson.data.point);
            if (points < 100) {
                alert(`积分不足100, 取消兑换!\nPoints: ${points}`);
                return;
            }
            // todo: 查库存
            // setIntervalWithin()
            toast(`当前积分: ${points}`);
        }
    });
}

// SetInterval 但是限制时间
function setIntervalWithin(_task, _timeout, _maxTimeout) {
    var intervalTask = setInterval(() => {
        console.log(`Doing interval, auto stop after ${parseInt(_maxTimeout / 1000)}s.`);
        _task();
    }, _timeout);
    // 30s 后仍找不到元素，停止任务
    setTimeout(() => {
        console.log(`Safe stopping interval...`);
        clearInterval(intervalTask);
    }, _maxTimeout);
    return intervalTask;
}