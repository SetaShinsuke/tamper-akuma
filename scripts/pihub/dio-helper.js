// ==UserScript==
// @name         DioHelper
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  不同于 DioAddAcq，这个直接执行无需右键
// @author       Akuma
// @match        https://howlongtobeat.com/?q=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_openInTab
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-helper.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-helper.js
// ==/UserScript==

(function() {
    'use strict';
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
        case 'howlongtobeat.com':
            injectHl2b();
            break
    }
}

async function injectHl2b() {
    console.log(`Inject img copy btn`);
    await waitForEle(`.contain_in ul>li>div`);
    // 需要等一秒，否则会被覆盖移除
    await sleep(1_200);
    document.querySelectorAll(`.contain_in ul>li>div`).forEach(card => {
        let copyDiv = document.createElement('div');
        copyDiv.class = 'cover-copy-btn';
        copyDiv.textContent = `Copy`;
        copyDiv.style.position = "absolute";
        copyDiv.style.top = "0";
        copyDiv.style.right = "0";
        copyDiv.style.display = "inline";
        copyDiv.style.cursor = "pointer";
        copyDiv.style.padding = "4px";
        copyDiv.addEventListener('click', async _ => {
            let imgUrl = card.querySelector('a>img').src.replace(/\?width=.+/, '');
            copyToClipboard(imgUrl);
            toast(`Cover url copied!`);
            await sleep(1_000);
            window.close();
        });
        card.prepend(copyDiv);
        // card.insertBefore(copyDiv, card.firstElementChild);
        console.log(`copy btn added!\n`, card);
    });
}

function injectSteam() {}

function injectXbox() {}

function injectEpic() {}