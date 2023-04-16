// ==UserScript==
// @name         JavMdMigration
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Markdown to server data
// @author       Akuma
// @match        file:///C:/Users/24783/appdata/local/temp/*.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @connect      *
// @require      https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js
// @updateURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-md-migration.js
// @downloadURL    https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/javs/jav-md-migration.js
// ==/UserScript==

(function () {
    'use strict';
    console.log('Starting inject...');
    inject();
})();

function inject() {
    // do stuff
    let currentDate = '';
    let index = -1;
    addButton("开始迁移", {}, onClick = () => {
        Array.from(document.querySelector('article').children).forEach(el => {
            switch (el.tagName) {
                case 'H5':
                    currentDate = Date.parse(el.innerText.replace(/\n.*/, ''));
                    currentDate = (new Date(currentDate)).toDateString();
                    console.log(`Date: ${currentDate}`);
                    break;
                case 'P':
                    const a = el.querySelector('a');
                    if (!a) {
                        break
                    }
                    index += 1;
                    let site = a.href.match(/\/\/(.*)\/[evf]/)[1];
                    // let uid = a.href.match(/\/v\/(.*)/)[1];
                    let uid = a.href.match(/\/[evf]\/(.*)\?v_name=.*/)[1];
                    // const t = a.innerText;
                    const t = decodeURI(a.href.match(/\?v_name=(.*)/)[1]);
                    let title = t.match(/(.*?-.*?)-.*/);
                    if (title && title.length > 1) {
                        title = title[1];
                    } else {
                        title = '';
                    }
                    let tags = t.match(/(.*?-.*?)-(.*)/);
                    if (tags && tags.length > 2) {
                        tags = tags[2]?.match(/[a-zA-Z0-9]+/g);
                    } else {
                        tags = [];
                    }
                    let rate = 3;
                    if (tags?.includes('mark')) {
                        rate = 5;
                    } else if (tags?.includes('720p')) {
                        rate = 4;
                    }
                    let actors = t.match(/(.*?-.*?)(-.*)/);
                    if (actors && actors.length > 2) {
                        actors = actors[2]?.replace(/[a-zA-Z0-9]/g, '')
                            ?.split('-')?.filter(x => {
                                return x;
                            });
                    }

                    // 提交
                    let data = `site=${site}&uid=${uid}&title=${title}&rate=${rate}`;
                    data += `&logged_date=${currentDate}`;
                    data += `&auto_sync_cover=true&downloaded=true`;
                    // let data = `site=${site}&uid=${uid}&title=${title}&tags=${tags}&actors=${actors}`;
                    tags?.forEach(tag => {
                        data += `&tags[]=${tag}`;
                    });
                    actors?.forEach(actor => {
                        data += `&actors[]=${actor}`;
                    });

                    console.log(data);
                    fork(data, index);
                    console.log(index);
                    break;
            }
        });
    });
}

function fork(data, index) {
    GM_xmlhttpRequest({
        method: 'POST',
        url: `http://192.168.50.166:9292/api/javs`,
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        onerror: function (error) {
            console.log(`Fork error: `, error);
            alert(error);
        },
        onload: function (response) {
            console.log(response);
            console.log(`${index}\nFin!`)
        }
    });
}
