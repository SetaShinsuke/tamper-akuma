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

function toast(text) {
    var snackbar = document.getElementById('snackbar_jav');
    if (!snackbar) {
        console.log('Creating snackbar...')
        snackbar = document.createElement('div');
        snackbar.id = 'snackbar_jav';
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
        snackbar.style['z-index'] = "1";
        snackbar.style['left'] = "50%";
        snackbar.style['top'] = "400px";
        snackbar.style['font-size'] = "17px";
        document.body.appendChild(snackbar);
    }
    snackbar.innerHTML = text;
    snackbar.style['visibility'] = 'visible';
    console.log('Snackbar showed');
    setTimeout(() => {
        snackbar.style["visibility"] = 'hidden';
    }, 3000);
}

// 每秒找一次element，直到元素加载出来再运行
function runWhenLoaded(queryStr, task, timeout = 1000, maxTimeout = 30_000) {
    // 找到元素后开启任务
    var intervalTask = setInterval(() => {
        console.log('Doing interval...');
        var element = document.querySelector(queryStr);
        if (element) {
            task(element);
            console.log(`Interval finished, id: ${intervalTask}`);
            clearInterval(intervalTask);
        }
    }, timeout);
    // 30s 后仍找不到元素，停止任务
    setTimeout(() => {
        console.log(`查找元素超时，用时: ${parseInt(maxTimeout / 1000)}s`);
        clearInterval(intervalTask);
    }, maxTimeout);
}