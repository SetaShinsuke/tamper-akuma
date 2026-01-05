// ==UserScript==
// @name         DioHl2b
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Description here
// @author       Akuma
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      hltbapi.codepotatoes.de
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-hl2b.js
// @downloadURL  https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/pihub/dio-hl2b.js
// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/net-helper.js
// ==/UserScript==

const HL2B_API = `https://hltbapi.codepotatoes.de/hltb/search`;
let netHelper;

(function () {
    'use strict';
    alert('alert');
    console.log('Starting inject...');
    inject();
})();

function inject() {
    netHelper = new NetHelper();
    netHelper.headers['content-type'] ='application/json';
    unsafeWindow.hl2bApi = hl2bApi;
}

function hl2bApi(keyword){
    return new Promise((resolve, reject) => {
        let data = {
            SearchTerm: keyword,
            MatchType: "1", //1模糊, 2精准
        };
        console.log(data);
        netHelper.post(HL2B_API, data).then(x => {
            console.log(x);
            let finalRes = {
                hl2b_id: x['hltbId'],
                game_name: x['title'],
                game_image: x['imageUrl'],
                comp_main: x['mainStory'].round(1),
                comp_plus: x['mainStoryWithExtras'].round(1),
                comp_100: x['completionist'].round(1),
                steam_id: x['steamAppId'],
                gog_id: x['gogAppId']
            }
            console.log(finalRes);
            resolve(finalRes);
        }).catch(e => reject(e));
    });
}