// ==UserScript==
// @name         EpicOrder2Store
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  订单页点击游戏标题跳转到商店搜索
// @author       Akuma
// @match        https://www.epicgames.com/account/transactions/purchases*
// @match        https://store.epicgames.com/*/browse*
// @match        https://store.epicgames.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/${DIR_PATH}/epic-order2store
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/${DIR_PATH}/epic-order2store
// ==/UserScript==

const ACQ_DATE = 'acq_date';

(function () {
    'use strict';
    console.log('Starting inject...');
    if (/\/account\/transactions\/purchases/.test(window.location.pathname)) {
        injectPurchases();
    } else if (/\/browse/.test(window.location.pathname)) {
        injectBrowse();
    } else{
        injectBrowse();
    }
})();

async function injectPurchases() {
    // 等待表格加载
    await waitForEle(`tbody>tr.MuiTableRow-root`);
    // 标题增加链接
    injectLinks();
    // 翻页1s后重新注入
    ['prev-btn', 'next-btn'].forEach(async btn => {
        await sleep(1_000);
        injectLinks();
    });
}

function injectLinks() {
    document.querySelectorAll(`td>span>span.MuiBox-root>span.MuiTypography-root`).forEach(titleDiv => {
        // 按名称搜索
        let name = titleDiv.innerText;
        name = name.replace(/[《》]/, '');
        let link = `https://store.epicgames.com/zh-CN/browse?q=${name}&sortBy=relevancy&sortDir=DESC`;
        // link += `#record_date=${date}`;
        // Epic 会把参数过滤掉，因此复制日期到剪贴板
        // 点击
        titleDiv.style['cursor'] = 'pointer';
        titleDiv.addEventListener('click', title => {
            // 日期
            let date = titleDiv.parentNode.parentNode.parentNode.parentNode.children[1].innerText;
            date = date.replace(/[年月]/g, '-').replace(/日/, '');
            copyToClipboard(date);
            console.log(`Date copied: ${date}`);
            // 尽量通过 qurey 传给 dio，但无法保证!
            GM_setValue(ACQ_DATE, date);
            console.log(`GM_setValue: ${ACQ_DATE} = ${date}`);
            // 打开页面
            console.log(`Opening url: ${link}\nRec date: ${date}`);
            window.open(link, '_blank');
        });
    });
}

async function injectBrowse() {
    // 从 Tampermonkey 存储中获取日期
    let date = GM_getValue(ACQ_DATE);
    console.log(`Retrieved purchase date: ${date}`);
    await waitForEle(`section>section>ul>li>div>div>a`);
    document.querySelectorAll(`section>section>ul>li>div>div>a`).forEach(a => {
        a.setAttribute('target', '_blank');
        a.href = a.href + `?acq_date=${date}`;
        a.addEventListener('click', _=>{
            window.open(a.href, '_self');
        });
    });
}
