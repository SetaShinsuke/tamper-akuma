// ==UserScript==
// @name         BmAutoSign
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  BM自动签到
// @author       Akuma
// @match        https://manga.bilibili.com/eden/credits-exchange.html?*auto_sign=true*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm_auto_sign.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm_auto_sign.js
// ==/UserScript==

var API_SHARE = `https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic?platform=ios`;
const API_GET_SEASON_INFO = `https://manga.bilibili.com/twirp/user.v1.Season/GetSeasonInfo?device=pad&platform=ios`;
const API_TAKE_SEASON_GIFTS = `https://manga.bilibili.com/twirp/user.v1.Season/TakeSeasonGifts?device=h5&platform=web`;
const API_SIGN_INFO = `https://manga.bilibili.com/twirp/activity.v1.Activity/GetClockInInfo?platform=android`;
const API_SIGN = `https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn?platform=android`;
const HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": "https://manga.bilibili.com",
    "Origin": "https://manga.bilibili.com"
};
var LAST_SHARE = 'last_share';
var SHARE_ID = '25539';

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    if (!/DedeUserID/.test(document.cookie)) {
        alert(`用户未登录!`);
        console.log(`未登录`);
        return;
    }
    // 自动分享
    var lastShare = GM_getValue(LAST_SHARE);
    var today = (new Date()).toLocaleDateString();
    if (lastShare !== today) {
        console.log(`今日未分享，自动分享: ${today}`);
        doShare((resJson) => {
            GM_setValue(LAST_SHARE, today);
            console.log(`分享成功: ${today}\nResponse:`);
            console.log(resJson);
        });
    } else {
        console.log(`今日已分享: ${today}`);
    }

    // 签到
    GM_xmlhttpRequest({
        method: "POST",
        url: API_SIGN_INFO,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`SIGN_INFO error: `, error);
        },
        onload: function (response) {
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            if (resJson["data"]["status"] === "0") {
                console.log('今日未签到, 进行签到...');
                sign();
            }else {
                console.log('今日已签到!');
                getSeasonInfo();
            }
        }
    });
}

function sign() {
    var today = (new Date()).toLocaleDateString();
    GM_xmlhttpRequest({
        method: "POST",
        url: API_SIGN,
        headers: HEADERS,
        data: `type=0&date=${today}`,
        onerror: function (error) {
            console.log(`SIGN error: `, error);
        },
        onload: function (response) {
            console.log(response.responseText);
            getSeasonInfo()
        }
    });
}

function getSeasonInfo() {
    GM_xmlhttpRequest({
        method: "POST",
        url: API_GET_SEASON_INFO,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`GET_SEASON_INFO error: `, error);
        },
        onload: function (response) {
            // console.log(response.responseText);
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            var seasonId = resJson["data"]["season_id"];
            takeSeasonGifts(seasonId);
        }
    });
}

function takeSeasonGifts(seasonId) {
    GM_xmlhttpRequest({
        method: "POST",
        url: API_TAKE_SEASON_GIFTS,
        headers: HEADERS,
        data: `season_id=${seasonId}&id=0&take_type=1`,
        onerror: function (error) {
            console.log(`TAKE_SEASON_GIFTS error: `, error);
        },
        onload: function (response) {
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            var result = 'Result: ';
            switch (resJson["code"]) {
                case 0:
                    result = "领取成功!";
                    break
                case 2:
                    result = 'season_id 字段不正确';
                    break
                case 7:
                    result = '没有已经完成的 today_tasks';
                    break
            }
            console.log(result);
            alert(result);
        }
    });
}

function doShare(callback) {
    GM_xmlhttpRequest({
        method: "POST",
        url: API_SHARE,
        data: `comic_id=${SHARE_ID}`,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`Share error: `, error);
        },
        onload: function (response) {
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            var code = resJson.code;
            if (code !== 0) {
                console.log(`分享失败!\nMsg: ${resJson.msg}`);
                return
            }
            callback(resJson);
        }
    });
}
