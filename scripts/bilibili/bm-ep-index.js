// ==UserScript==
// @name            BM-EP-index
// @namespace       http://tampermonkey.net/
// @version         0.9
// @description     显示章节index; 控制台addHead()记录为卷首话
// @author          Akuma
// @match           https://manga.bilibili.com/detail/*
// @match           https://manga.bilibili.com/mc*
// @icon            data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant           GM_xmlhttpRequest
// @connect         192.168.50.166
// @connect         manga.bilibili.com
// @require         https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require         https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL       https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// @downloadURL     https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-ep-index.js
// ==/UserScript==

const API_GET_EP = `https://manga.bilibili.com/twirp/comic.v1.Comic/GetEpisode?device=pc&platform=web`;
const API_ADD_HEAD = `http://192.168.50.166:9292/api/bm/[MANGA_ID]/vol_heads?mode=add&short_titles[]=[SHORT_TITLES]`;

let netHelper;

(function () {
    'use strict';
    console.log('starting inject ep index...');
    onReady()
})();

function onReady() {
    if (document.location.pathname.includes('/detail')) {
        addIndexToDetailPage();
    } else {
        netHelper = new NetHelper();
        injectHeadSetter();
    }
}

function injectHeadSetter() {
    unsafeWindow.addHead = addHead;
    addButton('记录为卷首', {'left': '1%', 'bottom': '1%'}, _ => {
        addHead();
    }, 0)
}

async function addHead() {
    let epId = location.pathname.split('/').pop();
    let resJson = await netHelper.post(API_GET_EP, {'id': epId});
    let mangaId = resJson.data.comic_id;
    let shortTitle = resJson.data.short_title;
    // 添加
    console.log(`添加卷首, mangaId: ${mangaId}, shortTitle: ${shortTitle}`);
    let url = API_ADD_HEAD.replace(`[MANGA_ID]`, mangaId).replace(`[SHORT_TITLES]`, shortTitle);
    console.log(url);
    resJson = await netHelper.get(url).then(res => {
        toast('成功记录卷首!');
    }).catch(err => {
        alert(`记录卷首失败!\n${err.message}`);
    });
    console.log(resJson);
}

function addIndexToDetailPage() {
    runWhenLoaded('.episode-list', epList => {
        if (!epList) {
            console.log('Eplist not found')
            return;
        }
        var i = 0;
        epList.querySelectorAll('.list-item').forEach(btnEp => {
            i++;
            btnEp.title = `${i}`;
        });
        console.log('Index added to Detail Page.');
    });
}

function st2Num(shortTitle) {
    var str = shortTitle.replace(/^十/, '一').replace(/[百十]/g, '');
    var patterns = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    // var result = '';
    patterns.forEach(p => {
        str = str.replaceAll(p, '' + patterns.indexOf(p));
        str = str.replaceAll('两', '2');
    });
    console.log(str);
    return parseInt(str);
}