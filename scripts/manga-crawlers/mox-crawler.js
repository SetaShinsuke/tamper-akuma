// ==UserScript==
// @name         mox-crawler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  desc
// @author       Akuma
// @match        https://kox.moe/c/*.htm*?auto_max=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @connect      kox.moe
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mox-crawler.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mox-crawler.js
// ==/UserScript==

let API_KOX_LOGIN = `https://kox.moe/login_do.php`;
let KOX_ACCOUNTS = 'kox_accounts';
let CURRENT_EP = 'current_ep';


(async function () {
    'use strict';
    console.log('Starting inject...');
    let netHelper = new NetHelper();
    // 初始化 accounts
    initAccountSettings();
    let currentEp = getCurrentEp();
    if (!currentEp) {
        alert('请设置开始下载的EP\nsetCurrentEp(ep)\n并刷新');
        return;
    }
    let max = getQueryInt('auto_max');
    if (currentEp >= max) {
        console.log(`已达到 EP 上限!`);
        return;
    }
    // 按 account 的数量启动下载
    let accounts = getKoxAccounts();
    if (accounts.length === 0) {
        alert(`请添加账号\naddKoxAccount()\n并刷新!`);
        return;
    }
    for (const accountInfo of accounts) {
        let email = accountInfo.email;
        let psw = accountInfo.psw;
        let data = {
            "email": email,
            "passwd": psw,
            "keepalive": "on"
        }
        await netHelper.post(API_KOX_LOGIN, data);
        console.log(`Login success!`);
    }
})();

function initAccountSettings() {
    let koxAccounts = getKoxAccounts();
    if (!koxAccounts) {
        koxAccounts = [];
        GM_setValue(KOX_ACCOUNTS, JSON.stringify(koxAccounts));
    }
    unsafeWindow.setCurrentEp = setCurrentEp;
    unsafeWindow.getCurrentEp = getCurrentEp;
    unsafeWindow.addKoxAccount = addKoxAccount;
    unsafeWindow.clearKoxAccounts = () => {
        GM_deleteValue(KOX_ACCOUNTS);
    };
    unsafeWindow.getKoxAccounts = getKoxAccounts;
}

function getCurrentEp() {
    return GM_getValue(CURRENT_EP);
}

function setCurrentEp(index) {
    GM_setValue(CURRENT_EP, index);
}

// 返回 json_array 或 undefined
function getKoxAccounts() {
    let accounts = GM_getValue(KOX_ACCOUNTS);
    if (!accounts) {
        accounts = [];
        GM_setValue(KOX_ACCOUNTS, JSON.stringify(accounts));
    }
    return JSON.parse(accounts + '');
}

function addKoxAccount(email, psw) {
    let data = {
        "email": email,
        "psw": psw
    }
    console.log(`Add account: ${data}`);
    let accounts = getKoxAccounts();
    accounts.push(data);
    GM_setValue(KOX_ACCOUNTS, JSON.stringify(accounts));
}

