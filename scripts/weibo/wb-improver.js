// ==UserScript==
// @name         WBImprover
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  优化微博页面
// @author       Akuma
// @match        https://weibo.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://ghproxy.com/https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-improver.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo/wb-improver.js
// ==/UserScript==

(function () {
    'use strict';
    console.log(`Weibo beautifier ready to inject...`);
    // 发送图标去色
    // runWhenLoaded('.ficon_send', sendBtn => {
    //     sendBtn.style['background'] = '#00000022';
    // })

    // 修改背景图
    loadBkg();

    runWhenLoaded(`.woo-box-flex.woo-box-alignCenter>h3`, btn => {
        console.log('修改分组按钮->修改背景');
        btn.removeAttribute('href');
        btn.addEventListener('click', () => {
            var useBkg = GM_getValue('use_bkg');
            if(useBkg){
                GM_setValue('use_bkg', false);
            }else {
                GM_setValue('use_bkg', true);
            }
            loadBkg();
        });
    });

    // 视频->收藏
    runWhenLoaded(`[href^="/u/"]`, div => {
        var uid = div.href.match(/\/u\/(.*)/)[1];
        document.querySelector(`[href="/tv"]`).href = `/u/page/fav/${uid}`;
    });

    // // 去掉图标
    // var icons = document.querySelector('.gn_set_v2 S_line1');
    // if(!icons){
    //     console.log('Junk icons not found.');
    // }else {
    //     document.querySelector('.gn_set_v2').parentNode.removeChild(icons);
    // }

    // 搜索栏中键
    // runWhenLoaded('.gn_search_v2', searchBar => {
    //     searchBar.addEventListener('input', () => {
    //         setTimeout(inject, 1000);
    //     });
    // });

})();

function loadBkg() {
    runWhenLoaded('#app>div', appDiv => {
        appDiv.style['background-color'] = 'transparent';
        var useBkg = GM_getValue('use_bkg');
        var bkgUrl = GM_getValue('bkg_url');
        console.log(`修改背景图, useBkg: ${useBkg}; bkgUrl: ${bkgUrl}`);
        if(useBkg){
            if(!bkgUrl){
                GM_setValue('bkg_url', 'ww1.sinaimg.cn/woriginal/68da427djw1e0azptdtl3j.jpg');
            }
            appDiv.style['background-image'] = `url(//${bkgUrl})`;
            appDiv.style['background-repeat'] = `repeat`;
            appDiv.style['background-attachment'] = `fixed`;
            appDiv.style['background-position'] = `left top`;
        }else {
            appDiv.style['background-image'] = ``;
            appDiv.style['background-repeat'] = ``;
            appDiv.style['background-attachment'] = ``;
            appDiv.style['background-position'] = ``;
        }
    });
}

function inject() {
    var items = document.querySelector(".gn_topmenulist").querySelectorAll(".clearfix");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        // console.log('item: ');
        // console.log(item);
        // item.urlParam = item.getAttribute('durl');
        item.removeEventListener('auxclick', onAuxClick);
        item.addEventListener('auxclick', onAuxClick);
    }
}

function onAuxClick(event) {
    if (event.which !== 2) {
        return;
    }
    // console.log(event.target);
    var item = event.target.closest(".clearfix");
    if (!item) {
        return;
    }
    var url = item.getAttribute('durl');
    console.log(url);
    window.open(url, '_blank').focus();
}