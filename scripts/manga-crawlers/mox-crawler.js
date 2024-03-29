// ==UserScript==
// @name         mox-crawler
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  desc
// @author       Akuma
// @match        https://kox.moe/c/*.htm*?auto_max=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @connect      kox.moe
// @connect      free7.mxomo.com
// @connect      free8.mxomo.com
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mox-crawler.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/mox-crawler.js
// ==/UserScript==

let API_KOX_LOGIN = `https://kox.moe/login_do.php`;
let API_KOX_LOGOUT = `https://kox.moe/logout.php`;
let DOWN_URL = `https://kox.moe/dl/__BOOK_ID__/1__EP_NO__/0/2/0/`;

let KOX_ACCOUNTS = 'kox_accounts';
let CURRENT_EP = 'current_ep';


(async function () {
    'use strict';
    console.log('Starting inject...');
    let netHelper = new NetHelper();
    netHelper.returnRaw = true;
    // 初始化 accounts
    initAccountSettings();
    let currentEp = getCurrentEp();
    if (!currentEp) {
        alert('请设置开始下载的EP\nsetCurrentEp(ep)\n并刷新');
        return;
    }
    let max = getQueryInt('auto_max');
    if (currentEp > max) {
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
        // 找下载地址
        let bookId = location.pathname.replace(/\/c\/(\d+).htm/, '$1');
        let epNo = `${currentEp}`.padStart(3, '0');
        let downUrl = DOWN_URL.replace('__BOOK_ID__', bookId).replace('__EP_NO__', epNo);
        console.log(`Down url: ${downUrl}`);

        let response = await netHelper.head(downUrl);
        let finalUrl = response.finalUrl;
        console.log(`Final url: ${finalUrl}`);
        copyToClipboard(finalUrl);
        alert(`下载链接已复制，请尽快粘贴到IDM！`);
        // let finalUrl = downUrl + '';

        // window.open(finalUrl, '_blank');
        console.log(`退出登录`);
        await netHelper.get(API_KOX_LOGOUT);
        let timeout = 30;
        console.log(`${2 * timeout}s 后开始下一话`);
        toast(`${2 * timeout}s 后开始下一话`);
        await sleep(timeout * 1000);
        currentEp += 1;
        setCurrentEp(currentEp);
        if (currentEp >= max) {
            console.log(`已达到 EP 上限!`);
            break;
        }
        await sleep(timeout);
    }
    console.log(`任务结束`);
    console.log(`todo: 关闭浏览器`);
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
        accounts = '[]';
    }
    return JSON.parse(accounts);
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

