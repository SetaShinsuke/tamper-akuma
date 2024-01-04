// ==UserScript==
// @name         Crawler-Manhuagui
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Craw from manhuagui.com
// @author       Akuma
// @match        https://www.manhuagui.com/comic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/manga-crawlers/crawler-manhuagui.js
// ==/UserScript==

let IMG_HOST = `https://i.hamreus.com`;

(function () {
    'use strict';
    console.log('Starting inject...');
    addButton('爬取图片',{}, ()=>{
        inject();
    });
})();

function inject() {
    // do stuff
    var tasks = {};
    var bookName = document.getElementsByTagName('h1')[0].innerText;
    var chapterName = document.getElementsByTagName('h2')[0].innerText
    chapterName = chapterName.replaceAll('（', '(').replaceAll('）', ')');
    chapterName = chapterName.replaceAll(/[\/：:*?|&;$%@"<>+,a]/g, '-');

    tasks['config'] = {};
    tasks['config']['referer'] = `${window.location.protocol}//${window.location.host}`;
    tasks['config']['book_name'] = bookName;

    tasks[chapterName] = [];

    var coverUrl = document.getElementById('mangaBox').getElementsByTagName('img')[0].src;

    var links = [coverUrl];
    // var imgs = Array.from(document.getElementById('mangaMoreBox').getElementsByTagName('img')).map(it => it.src);
    let data = getDataFromScript();
    let imgs = data.files.map(f => IMG_HOST + data.path + f + `?e=${data.sl.e}&m=${data.sl.m}`);
    console.log(imgs);
    imgs.forEach(it => links.push(it));
    for (var i = 0; i < links.length; i++) {
        var url = links[i];
        var fileName = `${i + 1}`.padStart(3, '0') + '.'
        var cSubs = coverUrl.split('?')[0].split('.');
        var ext = cSubs[cSubs.length - 1];
        fileName += `${ext}`;
        tasks[chapterName].push({'url': url, 'file_name': fileName, 'page': '' + i});
    }

    console.log(`Tasks size: ${links.length}`);

    var saveName = `tasks_${bookName}_${Date.now()}.json`;
    console.log(saveName);
    saveTextFile(JSON.stringify(tasks), saveName);
}

function getDataFromScript() {
    let dataJson = {};
    let scripts = document.body.getElementsByTagName('script');
    Array.from(scripts).forEach(script => {
        let jsText = script.innerText;
        if (/^[\n\s]?window\["/.test(jsText)) {
            // console.log(jsText);
            let matches = jsText.match(/function\((.*?)\){(.*)}\((.*)\)\)/);
            // console.log(matches);
            let funcPar = matches[1];
            let funcContent = matches[2];
            let par = matches[3];
            // console.log(`par: \n${par}`);
            eval(`function decodeData(${funcPar}){${funcContent}}`);
            // console.log(decodeData);
            let result = eval(`decodeData(${par})`);
            let jsonStr = result.match(/SMH.imgData\((.*)\).preInit\(\);/)[1];
            dataJson = JSON.parse(jsonStr);
        }
    });
    console.log(dataJson);
    return dataJson;
}

/*
window["\x65\x76\x61\x6c"](function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('3H.37({"1j":16,"1d":"1b","1y":"16.2","1C":1A,"1z":"1v","1E":["4-1r-1p.2.3","4-1D-1c.2.3","4-W-1e.2.3","4-W-1i.2.3","4-15-1k.2.3","4-15-1W.2.3","4-U-1Z.2.3","4-U-23.2.3","4-Y-24.2.3","4-Y-27.2.3","4-10-2a.2.3","4-10-1Y.2.3","4-13-1N.2.3","4-13-1K.2.3","4-19-1O.2.3","4-19-1Q.2.3","4-T-1T.2.3","4-T-21.2.3","4-F-1U.2.3","4-F-1S.2.3","4-p-1R.2.3","4-p-1P.2.3","4-n-1V.2.3","4-n-1M.2.3","4-5-1L.2.3","4-5-1I.2.3","4-i-1H.2.3","4-i-1X.2.3","4-f-25.2.3","4-f-2c.2.3","4-c-2b.2.3","4-c-29.2.3","4-9-28.2.3","4-9-2d.2.3","4-7-26.2.3","4-7-22.2.3","4-u-1F.2.3","4-u-20.2.3","4-P-1G.2.3","4-P-1u.2.3","4-M-1l.2.3","4-M-1h.2.3","4-K-1m.2.3","4-K-1a.2.3","4-H-1g.2.3","4-H-1q.2.3","4-G-1t.2.3","4-G-1w.2.3","4-C-1x.2.3","4-C-1B.2.3","4-A-1n.2.3","4-A-1s.2.3","4-x-1o.2.3","4-x-1f.2.3","4-S-1J.2.3","4-S-2y.2.3","4-w-2g.2.3","4-w-3i.2.3","4-y-3h.2.3","4-y-3g.2.3","4-z-3f.2.3","4-z-3e.2.3","4-B-3d.2.3","4-B-3c.2.3","4-D-3b.2.3","4-D-3a.2.3","4-E-39.2.3","4-E-38.2.3","4-Q-2f.2.3","4-Q-36.2.3","4-I-35.2.3","4-I-34.2.3","4-J-33.2.3","4-J-32.2.3","4-L-31.2.3","4-L-3l.2.3","4-N-3j.2.3","4-N-3k.2.3","4-O-3u.2.3","4-O-3m.2.3","4-v-3G.2.3","4-v-3F.2.3","4-t-3E.2.3","4-t-3D.2.3","4-6-3C.2.3","4-6-3B.2.3","4-8-3A.2.3","4-8-3z.2.3","4-a-3y.2.3","4-a-3w.2.3","4-b-3v.2.3","4-b-3x.2.3","4-d-3t.2.3","4-d-3s.2.3","4-s-3r.2.3","4-s-3q.2.3","4-h-3p.2.3","4-h-3o.2.3","4-j-3n.2.3","4-j-2Z.2.3","4-k-30.2.3","4-k-2X.2.3","4-l-2W.2.3","4-l-2Y.2.3","4-o-2x.2.3","4-o-2w.2.3","4-q-2v.2.3","4-q-2u.2.3","4-r-2t.2.3","4-r-2s.2.3","4-R-2r.2.3","4-R-2z.2.3","4-18-2q.2.3","4-18-2o.2.3","4-17-2n.2.3","4-17-2m.2.3","4-14-2l.2.3","4-14-2k.2.3","4-12-2j.2.3","4-12-2i.2.3","4-11-2h.2.3","4-11-2p.2.3","4-Z-2A.2.3","4-Z-2B.2.3","4-X-2C.2.3","4-X-2V.2.3","4-V-2U.2.3","4-V-2T.2.3"],"2S":2R,"2Q":2P,"2O":"/2N/g/2M/2L/","2K":1,"2J":"","2I":0,"2H":0,"2G":{"e":2F,"m":"2E-2D"}}).2e();',62,230,'D7BWAcHNgdwUwEbmAZznAtgC2ABgIwAsehxBAnCQKx74AcJAbCQOy1u6EO3N5W60auKvj4AmPgGYQBacLL4JwoVWadKnOWIGclknWIa5Jo40rEdJWtZLKSh+U2KFi7lo2LmSNYpYR2ETqaSalQcYhr4OsJ4jELGsWS4aoxyuByMSoymuEaM0cT4YXRGVBpURriUgakIwICnKoD1poCTRoCwcoAv0YC70cAAZp50dQgAdgCGGHDAngDGI8D4cIp1+VPEdD0AJut10yODAJbrwOSSPZRrm8A10ghWNPOKwFPrdIfLhHW4BMA39nVw7z08Lc6oAabwIgHdlYD/BA9OrrCoSJB7KaPUbjOZlZwSeF0MR1KYHPC4CQ9PYAGzgKGAdGJH1ulwQU2Y5BYPUkdX05AEsJ6VDqLLZ3z6fN6MLuVC2l0QjDqRS2dUI0uAqkIkrEmQEKsOMOcRxO5AVjJlwBOv2A6xCbBpeO2GsG5HQcMtf3yzEYhFc3wdEzgro+5HWPskdCmHLZNDgwZR7tc/sDdXAACc4ABJIZ7AAu1IW0nwthodEIjBRhCsocuZd6kgsdTZFmAIwN7wbTce62ydULxfx7dEhfIEkILBeCuHhxYLCoIonU8mUyouznC5NVVwncIA45ngm1ckiChCBewAASgAJIYwLAYAAeiYAisAAPYADQA4s/ID0AFIARwAXgAmgAohI+AsMYk7gWUqBksASZwAAbimhxDHA14Zsh3xko+UwANYAPpTCiKAZiMGYAK5Ul8kAoGSCAoFg+HXoc4AoMQ4BkTgigMBSQzABmibkRMpLpgxcCHAMUxrtSjICIgI7fPCgIINk5YIEpdSYs2Kn4CiuBEWQUx0Ma+nGZM7yLrGsx0DmdR7BgkAACJkbMCDkKQ9qkMquDrHi3m+b0RAGoFG6PCMBD4uFog9L6zYxe6cz5h8LD4GoKUmQZcL4D0i5aSaUzshyBX4mIcAilMpU0FQYgWppNXSOs2WzOQ5D4EsuxtUcrUIO1CCiBaVDNgNxCMOsPTSaN40Nr50kjDNeDWh81rAAAygAsqeQA==='['\x73\x70\x6c\x69\x63']('\x7c'),0,{}))
* */
