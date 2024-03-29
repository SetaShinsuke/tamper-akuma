// ==UserScript==
// @name         BM-Exchange-Ex
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Auto exchange bilibili manga credits for global-welfare-coupon
// @author       Akuma
// @match        https://manga.bilibili.com/eden/credits-exchange.html?*auto=true*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      *
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-exchange-ex.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-exchange-ex.js
// ==/UserScript==

// TODO: 关掉测试
var DEV_MODE = false;
var INJECT_TIMEOUT = 3_000;
var API_GET_POINTS = `https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/GetUserPoint?device=pad&platform=ios`;
var API_LIST_PRODUCT = `https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/ListProduct?device=pad&platform=ios`;
var API_EXCHANGE = `https://manga.bilibili.com/twirp/pointshop.v1.Pointshop/Exchange?device=pad&platform=ios`;
var API_SHARE = `https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic?platform=ios`;
var HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Referer": "https://manga.bilibili.com",
    "Origin": "https://manga.bilibili.com"
}

// &cp_id=1938&refreshing=2000&retry_range=1200-2500&end_min=4
var CPID = 1938; // 新版【超特惠-全场券】
// var CPID = 1931; // 新版【全场券】
// var CPID = 195; // 旧版【福利券】下线
// 重试的 timeout 范围(1.2s~3s)
var RANDOM_TIMEOUT_RANGE = [1_200, 2_000];
// :04 分后停止刷新
var END_MIN = 4;
var REFRESHING = 2_000;
var PRE_REFRESHING = 500;

var pause = false;
var coupon = null;

(function () {
    'use strict';
    // 如果是edge，跳转到有 param 的页面
    // if (/Edg/.test(navigator.userAgent)
    //     && document.location.search === '') {
    //     var dest = `${document.location}?auto=true`;
    //     console.log(`在使用Edge, 跳转到自动兑换页: ${dest}`);
    //     window.open(dest, '_self');
    //     return;
    // }
    if (!/DedeUserID/.test(document.cookie)) {
        alert(`用户未登录!`);
        console.log(`未登录`);
        return;
    }
    console.log(`starting inject in ${parseInt(INJECT_TIMEOUT / 1000)} seconds...`);
    var urlParams = new URLSearchParams(document.location.search);
    // 调试模式
    if (urlParams.get('dev_mode') === 'true') {
        DEV_MODE = true;
    }
    console.log(`Dev mode: ${DEV_MODE}`);
    // 兑换ID
    if (urlParams.get('cp_id')) {
        CPID = parseInt(urlParams.get('cp_id'));
        console.log(`要兑换的ID: ${CPID}`);
    }

    // 重试延时范围
    if (urlParams.get('retry_range')) {
        RANDOM_TIMEOUT_RANGE = urlParams.get('retry_range').split('-').map(x => parseInt(x));
        console.log(`Range: `, RANDOM_TIMEOUT_RANGE);
    }

    // 停止时限
    if (urlParams.get('end_min')) {
        END_MIN = parseInt(urlParams.get('end_min'));
        console.log(`END MIN: ${urlParams.get('end_min')}`)
    }

    // 最快的刷新速度
    if (urlParams.get('refreshing')) {
        REFRESHING = parseInt(urlParams.get('refreshing'));
        console.log(`Refreshing: ${REFRESHING}`);
    }

    // 开始注入
    if (urlParams.get('auto') === 'true') {
        addPauseBtn();
        if (!DEV_MODE && timoutByClock() < 0) {
            console.log(`未到时间, 不自动兑换`);
            return
        }
        setTimeout(onReady, INJECT_TIMEOUT);
    } else {
        console.log(`不自动兑换`);
    }
})();

function onReady() {
    console.log(`Get points...`);
    // 查积分
    var res;
    GM_xmlhttpRequest({
        method: "POST",
        url: API_GET_POINTS,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`Get user points error: `, error);
        },
        onload: function (response) {
            console.log(response);
            res = response;
            // console.log(response.responseText);
            var resJson = JSON.parse(response.responseText);
            var code = resJson.code;
            if (code !== 0) {
                console.log(`获取积分信息失败!\nMsg: ${resJson.msg}\n2s 后刷新页面`);
                // 重新加载页面
                setTimeout(location.reload, 2_000);
                return
            }
            var points = parseInt(resJson.data.point);
            if (points < 100) {
                alert(`积分不足100, 取消兑换!\nPoints: ${points}`);
                return;
            }
            // 查库存
            listProduct(points);
            toast(`当前积分: ${points}`);
        }
    });
}

function listProduct(points) {
    console.log(`List product...`);
    // 检测时间
    var t = timoutByClock();
    if (!DEV_MODE && t < 0) {
        console.log(`未到兑换时间, 不再刷新(listProduct)`);
        return;
    }
    GM_xmlhttpRequest({
        method: "POST",
        url: API_LIST_PRODUCT,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`Get product list error: `, error);
            console.log(`重试中: ${this.url}`);
            retryIn5(listProduct, points);
        },
        onload: function (response) {
            console.log(response);
            // console.log(response.responseText);
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            var code = resJson.code;
            if (code !== 0) {
                console.log(`获取兑换列表失败, 重试中...\nMsg: ${resJson.msg}`);
                retryIn5(listProduct, points);
                return
            }
            resJson.data.forEach(d => {
                if (d.id === CPID) {
                    coupon = d;
                    console.log(`Coupon id: ${CPID}`);
                }
            });
            if (coupon == null && resJson.data.length > 0) {
                // 有可能换了ID
                console.log(`First product id: ${resJson.data[0].id}`);
                if (!resJson.data[0].title.includes('福利券')
                    || !resJson.data[0].title.includes('特惠')
                    || resJson.data[0].real_cost > 100) {
                    console.log(`第一个商品不是通用券, 重试中...\nMsg: ${resJson.msg}`);
                    retryIn5(listProduct, points);
                    return
                } else {
                    coupon = resJson.data[0];
                }
            }
            console.log(`Remain: ${coupon?.remain_amount}`);
            if (coupon == null || (!DEV_MODE && coupon.remain_amount === 0)) {
                console.log(`通用券兑换不可用，${parseInt(t / 1000)}s 后刷新...`);
                setTimeout(listProduct, t, points);
                return;
            }
            // 进行兑换
            doExchange(points);
        }
    });
}

/**
 * 根据当前时间确定多久刷新一次兑换列表
 * @returns {number} timeout，返回 -1 则不用刷新
 */
function timoutByClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(`时间: ${hours}:` + `${minutes}`.padStart(2, '0') + `:` + `${date.getSeconds()}`.padStart(2, '0'));
    // 2023.5.30 更新: 仅判断分钟
    if (minutes >= 59) {
        return PRE_REFRESHING;
    }
    if (minutes >= 55) {
        return 30_000;
    }
    if (minutes >= 50) {
        return 2 * 60 * 1_000;
    }
    // 默认 END_MIN = 4
    if (minutes >= END_MIN) {
        return -1;
    }
    // 默认 REFRESHING = 2000
    if (minutes >= 0 && minutes < 5) {
        return REFRESHING;
    }
    return 5_000;

    // [0:00 ~ 23:50]
    // [0:03 ~ 24:00]
    // 2023.5.19 更新：0点刷新
    // if ((hours > 0 && hours < 23)
    //     || (hours === 23 && minutes < 50)
    //     // || hours > 0
    //     || (hours === 0 && minutes >= 3)) {
    //     console.log(`不必刷新: ${hours}:${minutes}`);
    //     return -1;
    // } else if (minutes >= 0 && minutes < 4) {
    //     // [12:00 ~ 12:02]
    //     return 5_000;
    // } else if (minutes >= 59) {
    //     return 5_000;
    // } else if (minutes > 55) {
    //     // [11:55 ~ 12:00]
    //     return 30_000;
    // }
    // // [11:50 ~ 11:55]
    // return 2 * 60 * 1000;
}

function doExchange(points) {
    var price = coupon.real_cost; // 单价
    var num = Math.floor(points / price);
    var point = num * price;
    console.log(`Do exchange, num: ${num}, point: ${point}`);
    GM_xmlhttpRequest({
        method: "POST",
        url: API_EXCHANGE,
        data: `product_id=${coupon.id}&product_num=${num}&point=${point}`,
        headers: HEADERS,
        onerror: function (error) {
            console.log(`Exchange error: `, error);
            console.log(`5s内重试: ${this.url}`);
            retryIn5(doExchange, points);
        },
        onload: function (response) {
            console.log(response);
            // console.log(response.responseText);
            var resJson = JSON.parse(response.responseText);
            console.log(resJson);
            var code = resJson.code;
            if (!DEV_MODE && code === 2) {
                console.log(`兑换失败, 库存不足, 停止刷新\nMsg: ${resJson.msg}`);
                alert(`已经结束咧!`);
                return;
            } else if (code !== 0) {
                console.log(`兑换失败, 重试中...\nMsg: ${resJson.msg}`);
                retryFast(doExchange, points);
                return
            }
            console.log(`兑换成功, 刷新页面!\nNum: ${num}`);
            console.log(`Success, remain: ${resJson.remain_amount}`);
            window.open(window.location.href.replace(`auto=true`, `auto=false&success=${num}`), '_self');
        }
    });
}

function retryIn5(task, ...arguments) {
    if (pause) {
        console.log(`Pause Retry()`);
        return
    }
    console.log(`Retrying in 5s...`);
    setTimeout(task, 5_000, ...arguments);
}

function retryFast(task, ...arguments) {
    if (pause) {
        console.log(`Pause Retry()`);
        return
    }
    // 服务器似乎限制了 1000ms 的限制
    var timeout = randomInRange(RANDOM_TIMEOUT_RANGE[0], RANDOM_TIMEOUT_RANGE[1]);
    console.log(`Retrying fast...random timeout: ${timeout}`);
    setTimeout(task, timeout, ...arguments);
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function addPauseBtn() {
    var btnPause = document.createElement('button');
    btnPause.innerHTML = "Pause/Resume";
    btnPause.id = 'btnPause';
    btnPause.style['color'] = 'white';
    btnPause.style['background'] = 'rgb(229 94 194)';
    btnPause.style['position'] = 'fixed';
    btnPause.style['top'] = '1%';
    btnPause.style['right'] = '1%';
    btnPause.style['padding'] = '16px';
    btnPause.style['border-radius'] = '4px';
    btnPause.style['font-size'] = '16px';
    btnPause.style['z-index'] = '20';
    btnPause.addEventListener('click', () => {
        pause = !pause;
        console.log(`Pause: ${pause}`);
        if (!pause) {
            console.log(`重新开始自动兑换`);
            onReady();
        }
    });
    document.body.appendChild(btnPause);
}