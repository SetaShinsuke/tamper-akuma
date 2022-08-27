// ==UserScript==
// @name         WBSearch
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  中键打开搜索结果
// @author       Akuma
// @match        https://weibo.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo-search-open.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo-search-open.js
// ==/UserScript==

(function () {
    'use strict';
    console.log(`Weibo beautifier ready to inject...`);
    // 发送图标去色
    runWhenLoaded('.ficon_send', sendBtn => {
        sendBtn.style['background'] = '#00000022';
    })

    // // 去掉图标
    // var icons = document.querySelector('.gn_set_v2 S_line1');
    // if(!icons){
    //     console.log('Junk icons not found.');
    // }else {
    //     document.querySelector('.gn_set_v2').parentNode.removeChild(icons);
    // }

    // 搜索栏中键
    runWhenLoaded('.gn_search_v2', searchBar => {
        searchBar.addEventListener('input', (x) => {
            setTimeout(inject, 1000);
        });
    });
})();

// todo: 测试代码的自动更新

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