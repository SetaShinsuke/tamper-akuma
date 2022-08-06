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
    fileName = fileName.replace('\\', '_').replace('/', '_');
    fileName = fileName.replace('（', '(').replace('）', ')')
        .replace(' ', '_').replace('：', ':');
    var reg = /[/·. :*?"<>|]/g;
    fileName = fileName.replace(reg, '-');
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