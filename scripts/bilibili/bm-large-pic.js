// ==UserScript==
// @name         bm-large-pic
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  desc
// @author       Akuma
// @match        https://manga.bilibili.com/mc*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      manga.bilibili.com
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-large-pic.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili/bm-large-pic.js
// ==/UserScript==

const API_IMG_INDEX = `https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex?device=pc&platform=web`;
const API_IMG_TOKEN = `https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken?device=pc&platform=web`;
let netHelper;

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    netHelper = new NetHelper();
    unsafeWindow.checkPic = checkPic;
}

async function checkPic(page) {
    // 拉取图片列表
    let epId = location.pathname.split('/').pop();
    let resJson = await netHelper.post(API_IMG_INDEX, {'ep_id': epId});
    let imgs = resJson.data.images;
    let imgPath = imgs[page].path;
    // console.log(imgs);
    // 拉图片
    resJson = await netHelper.post(API_IMG_TOKEN, {'urls': `[\"${imgPath}\"]`});
    let picData = resJson.data[0];
    // let fullPic = `${picData.url}?token=${picData.token}`;
    // console.log(`Full pic: \n`, fullPic);
    let fullPic = `${picData.complete_url}`;
    // 打开
    window.open(fullPic, '_blank');
}
