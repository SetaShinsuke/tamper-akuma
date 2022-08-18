// ==UserScript==
// @name         HowLongToBeat-AutoSearch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Search how long to beat depending on url param
// @author       Akuma
// @match        https://howlongtobeat.com/*?keyword=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/hl2b-auto-search.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/hl2b-auto-search.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Ready to crawl.')
    setTimeout(inject, 500);
})();

function inject() {
    var urlParams = new URLSearchParams(document.location.search);
    var keyword = urlParams.get('keyword');
    console.log(`Auto search: ${keyword}`);
    document.querySelector('#global_search_box').value = keyword;
    setTimeout(function() {return hitkey_l(0,document.forms.global_search_form.t.value,this.value);}, 50);
}