// ==UserScript==
// @name         bm-wbi
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Description here
// @author       Akuma
// @match        https://manga.bilibili.com/*
// @grant        GM_openInTab
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-wbi.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-wbi.js
// ==/UserScript==

const mixinKeyEncTab = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
    33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
    61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
    36, 20, 34, 44, 52
];

const API_REPLIES = `https://api.bilibili.com/x/v2/reply/wbi/main`;

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

async function inject() {
    // await waitForEle(`head`);
    // requireMD5();
    unsafeWindow.getWbiParams = getWbiParams;
    if (window.location.pathname.match(/\/mc.*\/(.*)\??/)[1]) {
        addButton(`查看评论`, {'top': '6%', 'left': '1%'}, btn => {
            // 单话阅读页
            let chapId = window.location.pathname.match(/\/mc.*\/(.*)\??/)[1];
            console.log(`chapId=${chapId}`);
            // todo: 从外部传入参数
            showReplies(chapId, 3, `{"offset":"CAEiAggC"}`, 20);
        }, 0);
    }
}

async function showReplies(oid, mode, pageStr, pageSize) {
    let params = {
        oid: oid,
        type: 29,
        mode: mode,
        pagination_str: pageStr,
        ps: pageSize
    };
    console.log('params', params);
    let finalParams = await getWbiParams(null, params);
    console.log('finalParams', finalParams);
    const searchParams = new URLSearchParams(finalParams);
    const queryString = searchParams.toString();
    // 拼凑出 API_URL
    let replyUrl = API_REPLIES + '?' + queryString;
    console.log('replyUrl', replyUrl);
    try {
        GM_openInTab(replyUrl, false);
    } catch (e) {
        console.log(e);
        window.open(replyUrl, "_blank");
    }
}

// 给出 query 字符串，计算出 wbi 并返回完整的 query
async function getWbiParams(paramStr, paramsObj = null) {
    // string => object
    let params = paramsObj;
    if (!params) {
        params = queryStringToObject(paramStr);
    }
    console.log('params ', params);

    const web_keys = await getWbiKeys();
    const img_key = web_keys.img_key,
        sub_key = web_keys.sub_key
    console.log(img_key, sub_key);
    const query = encWbi(params, img_key, sub_key);
    console.log(query);
    return new Promise((resolve, reject) => {
        resolve(query);
    });
}

// 获取最新的 img_key 和 sub_key
async function getWbiKeys() {
    // const res = await fetch('https://api.bilibili.com/x/web-interface/nav', {
    //     headers: {
    //         // SESSDATA 字段
    //         Cookie: 'SESSDATA=xxxxxx',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    //         Referer: 'https://www.bilibili.com/'//对于直接浏览器调用可能不适用
    //     }
    // })
    // const { data: { wbi_img: { img_url, sub_url } } } = await res.json()
    const img_url = localStorage.wbi_img_url,
        sub_url = localStorage.wbi_sub_url;

    return {
        img_key: img_url.slice(
            img_url.lastIndexOf('/') + 1,
            img_url.lastIndexOf('.')
        ),
        sub_key: sub_url.slice(
            sub_url.lastIndexOf('/') + 1,
            sub_url.lastIndexOf('.')
        )
    };
}

const getMixinKey = (orig) => mixinKeyEncTab.map(n => orig[n]).join('').slice(0, 32);

// 为请求参数进行 wbi 签名
function encWbi(params, img_key, sub_key) {
    const mixin_key = getMixinKey(img_key + sub_key),
        curr_time = Math.round(Date.now() / 1000),
        chr_filter = /[!'()*]/g;

    Object.assign(params, {wts: curr_time}); // 添加 wts 字段
    // 按照 key 重排参数
    const query = Object
        .keys(params)
        .sort()
        .map(key => {
            // 过滤 value 中的 "!'()*" 字符
            const value = params[key].toString().replace(chr_filter, '')
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        })
        .join('&');
    console.log(`query: ${JSON.stringify(query)}`);

    // const wbi_sign = md5(query + mixin_key); // 计算 w_rid
    const wbi_sign = CryptoJS.MD5(query + mixin_key); // 计算 w_rid

    return query + '&w_rid=' + wbi_sign;
}

function requireMD5() {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js';
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js';
    script1.onload = () => console.log('md5 core 加载完成！');
    script2.onload = () => console.log('md5 加载完成！');
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    // var hash = CryptoJS.MD5("Message");
    // alert(hash);
}

const queryStringToObject = queryString =>
    Object.fromEntries([...new URLSearchParams(queryString)]);