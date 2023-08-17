// ==UserScript==
// @name         BM_TMP_TASK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  领取浪花
// @author       Akuma
// @match        https://manga.bilibili.com/blackboard/activity-tfoshYo7Qx.html?*auto_take=true*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-tmp-tasks.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-tmp-tasks.js
// ==/UserScript==

var INJECT_TIMEOUT = 5_000;
var API_TAKE = `https://manga.bilibili.com/wd40?op=TakeTask`;
// var API_TAKE = `https://manga.bilibili.com/wd40`;
var HEADERS = {};
var TASK_1 = 270032;
var TASK_2 = 270033;
var TASK_3 = 300052;

(function () {
    'use strict';
    console.log('Starting inject...');
    setTimeout(inject, INJECT_TIMEOUT);
})();

async function inject() {
    // do stuff
    let referer = `${window.location.protocol}//${window.location.host}`
    // HEADERS = {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //     "Referer": referer,
    //     "Origin": referer
    // }
    HEADERS = {
        "Content-Type": "application/json;charset=UTF-8",
        "Referer": referer,
        "Origin": referer
    };
    take(TASK_1);
    setTimeout(_ => {
        take(TASK_2);
    }, 2000);
    setTimeout(_ => {
        take(TASK_3).then(_ => {
            console.log(`领取完毕, 即将关闭窗口...`);
            toast(`领取完毕, 即将关闭窗口...`);
            setTimeout(() => {
                var customWindow = window.open('', '_self', '');
                customWindow.close();
            }, 5_000);
        });
    }, 3000);
}

function take(taskId) {
    return new Promise((resolve, reject) => {
        var rawData = {
            operationName: "TakeTask",
            variables: {
                id: taskId,
                actId: 870056
            },
            extensions: {
                persistedQuery: {
                    version: 1,
                    sha256Hash: "24b8448f2b8be0b16185ee5a9b11987185e206e375e142a753e9a6560f1c9247"
                }
            }
        };
        GM_xmlhttpRequest({
            method: "POST",
            url: API_TAKE,
            headers: HEADERS,
            dataType: "json",
            data: JSON.stringify(rawData),
            onerror: function (error) {
                console.log(`Take error: `, error);
                // reject(error);
            },
            onload: function (response) {
                // console.log(response.responseText);
                let resJson = JSON.parse(response.responseText);
                console.log(resJson);
                resolve();
            }
        });
    });
}
