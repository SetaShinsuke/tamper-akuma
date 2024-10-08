// @require https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/utils/utils.js

function getReferer() {
    let referer = `${window.location.protocol}//${window.location.host}`;
    console.log(`getReferer(): ${referer}`);
    return referer;
}

function sleep(ms) {
    return new Promise(resolve => {
        console.log(`等待 ${ms / 1000.0}s`);
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function closeWindow() {
    console.log(`Close custom window`);
    var customWindow = window.open('', '_self', '');
    customWindow.close();
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getQuery(name) {
    let params = new URLSearchParams(document.location.search);
    let par = params.get(name);
    console.log(`Get query [${name}]: `, par);
    return par;
}

function getQueryInt(name) {
    let params = new URLSearchParams(document.location.search);
    let num = parseInt(params.get(name));
    if (isNaN(num)) {
        num = -1;
    }
    return num;
}

function saveTextFile(text, fileName) {
    var data = new Blob([text], {type: 'text/plain'});
    // // If we are replacing a previously generated file we need to
    // // manually revoke the object URL to avoid memory leaks.
    // if (textFile !== null) {
    //     window.URL.revokeObjectURL(textFile);
    // }
    let textFile = window.URL.createObjectURL(data);

    var link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = textFile;
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });

    return textFile;
}

function getExtByUrl(url) {
    return getExtByName((new URL(url)).pathname);
}

// 用正则表达式获取后缀名
function getExtByName(fileName) {
    // 匹配[.xxx]结尾且[xxx]中不包含[.]
    let matches = fileName.match(/(\.[^.]+)$/);
    if (matches.length > 1) {
        // xxxx.jpg/800
        let ext = matches[1].replace(/\/.*/, '');
        if (ext.toLowerCase() === '.jpeg') {
            ext = '.jpg'
        }
        return ext;
    }
    return undefined
}

function getFileNameByUrl(url) {
    // 匹配[.xxx]结尾且[xxx]中不包含[.]
    let matches = url.match(/\/([^\/]+\.[^.]+)$/);
    if (matches.length > 1) {
        // xxxx.jpg/800
        // 去掉 ?query 部分
        return matches[1].replace(/\/.*/, '').replace(/\?.*/,'');
    }
    return undefined
}

function verifyFileName(fileName) {
    fileName = fileName.replace(/[\\\/\s+、，。]/g, '_')
    fileName = fileName.replace('（', '(').replace('）', ')').replace('：', ':');
    var reg = /[/·. :*?"<>|]/g;
    fileName = fileName.replace(reg, '_');
    fileName = fileName.replace(/_+/, '_');
    if (fileName.length > 150) {
        fileName = fileName.substring(0, 100);
    } //# 文件名超长
    return fileName;
}

function copyToClipboard(text) {
    console.log("Start copy...");
    var el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log("Copied!");
}

// _gravity: top, center, bottom, 或指定百分比
// _styles: 其它自定义样式
// return: 返回 snackbar 元素
function toast(text, _gravity = 'top', _timeout = 3000, _styles = {}) {
    var snackbarId = `snackbar_akuma`;
    var snackbar = document.getElementById(snackbarId);
    if (!snackbar) {
        console.log('Creating snackbar...')
        snackbar = document.createElement('div');
        snackbar.id = snackbarId;
        // snackbar.style['visibility'] = "visible";
        snackbar.style['visibility'] = "hidden";
        snackbar.style['min-width'] = "250px";
        snackbar.style['margin-left'] = "-125px";
        snackbar.style['background-color'] = "#333";
        snackbar.style['color'] = "#fff";
        snackbar.style['text-align'] = "center";
        snackbar.style['border-radius'] = "2px";
        snackbar.style['padding'] = "16px";
        snackbar.style['position'] = "fixed";
        snackbar.style['z-index'] = "2147483647";
        snackbar.style['left'] = "50%";
        snackbar.style['font-size'] = "17px";
        document.body.appendChild(snackbar);
    }
    var top;
    switch (_gravity) {
        case 'top':
            top = '10%'
            break;
        case 'center':
            top = '50%'
            break;
        case 'bottom':
            top = '80%';
            break;
        default:
            top = _gravity;
            break;

    }
    snackbar.style['top'] = top;
    for (const [key, value] of Object.entries(_styles)) {
        console.log(key, value);
        snackbar.style[key] = value;
    }
    snackbar.innerHTML = text;
    snackbar.style['visibility'] = 'visible';
    console.log('Snackbar showed');
    setTimeout(() => {
        snackbar.style["visibility"] = 'hidden';
    }, _timeout);
    return snackbar;
}

/**
 * 每500ms找一次element，直到元素加载出来再运行
 * @see {waitForEle} for the sync version
 * @param queryStr 查找的 query
 * @param task 查找后执行的方法
 * @param timeout 查询间隔
 * @param maxTimeout 超时时间
 */
function runWhenLoaded(queryStr, task, timeout = 500, maxTimeout = 30_000) {
    var safeStop = null;
    // 找到元素后开启任务
    var intervalTask = setInterval(() => {
        console.log('Doing interval...');
        var element = document.querySelector(queryStr);
        if (element) {
            task(element);
            console.log(`Interval finished, id: ${intervalTask}`);
            clearTimeout(safeStop);
            clearInterval(intervalTask);
        }
    }, timeout);
    // 30s 后仍找不到元素，停止任务
    safeStop = setTimeout(() => {
        console.log(`查找元素超时，用时: ${parseInt(maxTimeout / 1000)}s\nQuery: ${queryStr}`);
        clearInterval(intervalTask);
    }, maxTimeout);
}

/**
 * @see {runWhenLoaded} for the async version
 * @param queryStr 要查找的元素
 * @param timeout 隔多久查询一次
 * @param maxTimeout 超时时间
 * @returns {Promise<unknown>} 返回查找的元素/undefined
 * eg: let element = await waitForEle('.class').catch( e => console.log(e) );
 * 建议不 catch 了，找不到就让它崩溃
 */
function waitForEle(queryStr, timeout = 500, maxTimeout = 30_000) {
    return new Promise((resolve, reject) => {
        var safeStop = null;
        // 找到元素后开启任务
        var intervalTask = setInterval(() => {
            console.log('Doing interval...');
            var element = document.querySelector(queryStr);
            if (element) {
                console.log(`Interval finished, id: ${intervalTask}`);
                resolve(element);
                clearTimeout(safeStop);
                clearInterval(intervalTask);
            }
        }, timeout);
        // 30s 后仍找不到元素，停止任务
        safeStop = setTimeout(() => {
            console.log(`查找元素超时，用时: ${parseInt(maxTimeout / 1000)}s\nQuery: ${queryStr}`);
            reject('Cannot find ele: ' + queryStr);
            clearInterval(intervalTask);
        }, maxTimeout);
    });
}

// SetInterval 但是限制时间
function setIntervalWithin(_task, _timeout, _maxTimeout) {
    var intervalTask = setInterval(() => {
        console.log(`Doing interval, auto stop after ${parseInt(_maxTimeout / 1000)}s.`);
        _task();
    }, _timeout);
    // 30s 后仍找不到元素，停止任务
    setTimeout(() => {
        console.log(`Safe stopping interval...`);
        clearInterval(intervalTask);
    }, _maxTimeout);
    return intervalTask;
}

function zawaarudo(seconds) {
    console.log(`ザ·ワールド！時よ止まれ！`);
    console.log(`Doooooo`);
    let i = 0;
    let counting = setInterval(_ => {
        console.log(`${i++} 秒か`);
        if(i >= seconds){
            clearInterval(counting);
        }
    }, 1_000);
}

// SetTimeout 但是随机时间
/**
 * @param task
 * @param {Array} range [min, max]
 * @param arguments
 * @return {number} 返回 setTimeout() 的返回值
 */
function setTimeoutInRange(task, range, ...arguments) {
    if (pause) {
        console.log(`Pause Retry()`);
        return
    }
    // 服务器似乎限制了 1000ms 的限制
    var timeout = randomInRange(range[0], range[1]);
    console.log(`Retrying in random timeout: ${timeout}`);
    return setTimeout(task, timeout, ...arguments);
}

/**
 * 添加按钮, 并返回 id
 * @param text 显示名称
 * @param styles 样式
 * @param onClick 点击监听
 * @param preHover hover 之前默认的透明度
 * @returns {string} 按钮ID
 */
function addButton(text, styles = {}, onClick = null, preHover = 1) {
    var button = document.createElement('button');
    button.innerHTML = text;
    button.id = `button_${(new Date).getTime()}`;
    button.style['color'] = 'white';
    button.style['background'] = '#409eff';
    button.style['position'] = 'fixed';
    if (!styles['inset'] && !styles['bottom']) {
        button.style['top'] = '1%';
    }
    if (!styles['inset'] && !styles['left']) {
        button.style['right'] = '1%';
    }
    button.style['padding'] = '16px';
    button.style['border-radius'] = '4px';
    button.style['font-size'] = '16px';
    button.style['z-index'] = '2147483647';
    Object.keys(styles).forEach(key => {
        button.style[key] = styles[key];
    });
    if (onClick) {
        button.addEventListener('click', onClick);
    }
    if (preHover < 1) {
        button.style['opacity'] = preHover;
        button.addEventListener('mouseover', e => {
            button.style['opacity'] = '1';
        });
        button.addEventListener('mouseout', e => {
            button.style['opacity'] = `${preHover}`;
        });
    }
    document.body.appendChild(button);
    return button.id
}

// span -> a
function span2a(span, href) {
    var a = document.createElement('a');
    a.innerText = span.innerText;
    a.title = span.title
    a.href = href;
    a.classList = span.classList;
    span.parentNode.appendChild(a);
    span.style.display = 'none';
}