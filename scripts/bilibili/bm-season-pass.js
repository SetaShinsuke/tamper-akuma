// ==UserScript==
// @name         BM_SEASON_PASS
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  领取战令
// @author       Akuma
// @match        https://manga.bilibili.com/blackboard/activity-6rhkV9678d.html?*auto_take=true*
// @match        https://manga.bilibili.com/blackboard/activity-3MYGl2GxHY.html?*auto_take=true*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-season-pass.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-season-pass.js
// ==/UserScript==

var INJECT_TIMEOUT = 10_000;

let ACT_ID = 1590003;

let BM_TASKS = `https://manga.bilibili.com/twirp/activity.v1.Common/GetOnlineTaskInfo`;
let BM_FIN_TASKS = `https://manga.bilibili.com/twirp/activity.v1.Common/GetUserTask`;
let BM_REWARD = `https://manga.bilibili.com/twirp/activity.v1.Common/GetTaskReward`;
let BM_PASS_REWARD = `https://manga.bilibili.com/twirp/activity.v1.Battlepass/GetReward`;

let BM_PROFILE = `https://manga.bilibili.com/account-center/account-info`;

(async function () {
    'use strict';
    console.log('Starting inject...');
    await sleep(INJECT_TIMEOUT);
    // 红包页面
    if(/3MYGl2GxHY/.test(window.location.pathname)){
        console.log(`红包页，准备跳转到活动主页面`);
        await sleep(INJECT_TIMEOUT);
        let actUrl = `https://manga.bilibili.com/blackboard/activity-6rhkV9678d.html?auto_take=true`;
        window.open(actUrl, '_self');
        // closeWindow();
    }else {
        inject();
    }
})();

async function inject() {
    let netHelper = new NetHelper();
    // 获取任务列表
    console.log(`获取任务列表`);
    let data = {'act_id': ACT_ID};
    let taskIds = [];
    await netHelper.post(BM_TASKS, data).then(resJSON => {
        taskIds = resJSON.data.tasks.map(t => t.id);
    });
    console.log(`任务列表: \n`, taskIds);

    // 获取已完成的任务
    console.log(`获取已完成的任务`);
    let finTasks = [];
    data = {"task_ids": taskIds};
    await netHelper.post(BM_FIN_TASKS, data).then(resJson => {
        finTasks = resJson.data.tasks.filter(t => t.status === 1).map(t => t.task_id);
    });
    console.log(`已完成的任务: \n`, finTasks);

    for (const taskId of finTasks) {
        console.log(`提交任务: ${taskId}`);
        data = {'act_id': ACT_ID, 'task_id': taskId};
        // 提交已完成的任务
        await netHelper.post(BM_REWARD, data).then(resJson => {
            console.log(`任务已提交`);
        });
    }

    // 领取占领奖励
    console.log(`领取战令奖励`);
    await netHelper.post(BM_PASS_REWARD);

    // console.log(`任务全部提交, 准备关闭页面`);
    console.log(`任务全部提交, 准备跳转到个人页`);
    // 关闭
    await sleep(INJECT_TIMEOUT);

    window.open(BM_PROFILE, '_self');
}
