// ==UserScript==
// @name         WBSearch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  中键打开搜索结果
// @author       Akuma
// @match        https://weibo.com/*/home*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/weibo-search-open.js
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', (x) => {
        console.log('window loaded');
        document.querySelector('.gn_search_v2').addEventListener('input', (x) => {
            setTimeout(inject, 1000);
        });
    });
})();

function findSearch(){
    return document.querySelector('.gn_search_v2');
}

function inject(){
    var items = document.querySelector(".gn_topmenulist").querySelectorAll(".clearfix");
    for(var i = 0; i< items.length; i++){
        var item = items[i];
        // console.log('item: ');
        // console.log(item);
        // item.urlParam = item.getAttribute('durl');
        item.removeEventListener('auxclick', onAuxClick);
        item.addEventListener('auxclick', onAuxClick);
    }
}

function onAuxClick(event){
    if(event.which !== 2){
        return;
    }
    // console.log(event.target);
    var item = event.target.closest(".clearfix");
    if(!item){
        return;
    }
    var url = item.getAttribute('durl');
    console.log(url);
    window.open(url, '_blank').focus();
}