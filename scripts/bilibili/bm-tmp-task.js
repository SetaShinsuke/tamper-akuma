// ==UserScript==
// @name         BM_TMP_TASK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  领取浪花
// @author       Akuma
// @match        https://manga.bilibili.com/blackboard/activity-3MYGl2GxHY.html?*auto_take=true*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-tmp-tasks.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-tmp-tasks.js
// ==/UserScript==

var INJECT_TIMEOUT = 10_000;

let BM_GET_TASKS = `https://manga.bilibili.com/twirp/activity.v1.Common/GetUserTask`;
let BM_TASK_REWARD = `https://manga.bilibili.com/twirp/activity.v1.Common/GetTaskReward`;

(function () {
    'use strict';
    console.log('Starting inject...');
})();

async function inject() {
    let netHelper = new NetHelper();
    let finTasks = [];
    await netHelper.post(BM_GET_TASKS).then(resJson => {

    });
}
