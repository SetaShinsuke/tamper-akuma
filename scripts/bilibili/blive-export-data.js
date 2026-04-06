// ==UserScript==
// @name         BliveExport
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  导出直播弹幕数据
// @author       Akuma
// @match        https://link.bilibili.com/p/center/index*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-export-data.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/blive-export-data.js
// ==/UserScript==

// const LINK = `
// https://api.live.bilibili.com/xlive/anchor-center-interface/v1/anchorLiveData/GetLiveRecordInfos?live_key=679807213158126715&start_time=1774008427&end_time=1774021433&type=2&index=0&log_date=&page_size=50`;
// start_time, end_time: unix 时间戳，单位是秒，需要x1000后转为 date

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    addButton('导出弹幕', {'bottom': '1%'}, async _ => {
        // 切换到弹幕列表，并滚动
        document.querySelector(`.venue-record-con .rank-tab`).childNodes[1].click();
        let list = await  waitForEle('.venue-record-con .rank-list');
        let h = -1;
        for (let i=0; i<100; i++) { // 最多滚100圈，防止死循环
            console.log(h, list.scrollHeight);
            if (h === list.scrollHeight){
                break;
            }
            h = list.scrollHeight;
            list.scrollTop = h;
            await sleep(200);
        };

        // 爬取弹幕数据并保存
        // let date = document.querySelector(`.room-info .time span`).innerText.split(' ')[0];
        let date = document.querySelector(`.room-info .time span`).innerText.replaceAll(' ', '_').replaceAll(':', '-');
        let title = `直播弹幕_${date}`;
        let text = ``;
        let items = document.querySelectorAll(`.venue-record-con .rank-list .rank-list-item`);
        items.forEach(item => {
            let time = item.querySelector('.rank-time').innerText;
            let user = item.querySelector('.rank-name').innerText;
            let content = item.querySelector('.rank-content').innerText;
            // 从下往上加内容，让时间顺序变正序
            text = `${time}\n@${user}: ${content}\n\n` + text;
        });
        text = `${title}\n\n` + text;
        saveTextFile(text, `直播弹幕_${date}.txt`);
        toast(`弹幕已导出`);
        console.log(`弹幕已导出`);
    }, 0);
}
