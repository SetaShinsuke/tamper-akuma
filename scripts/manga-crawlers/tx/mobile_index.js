function _loadChapDetail(id, cid, cb) {
    var self = this;
    ek.ajax({
        url: '/chapter/index/id/' + id + '/cid/' + cid,
        data: {
            style: 'plain',
            qimei: window.localStorage.getItem('__BEACON_deviceId'),
        },
        rawResult: true,
        success: function (res) {
            var raw = String(res).replace(/(^[ \t\r\n]+|[ \t\r\n]+$)/g, '').split('\n');
            var win = {};
            new Function('window', raw[1])(win);
            var data = self.decode(raw[0], win['nonce']),
                chap = self.extractChap(data);
            self._saveChapDetail(chap);
            cb && cb(chap);
        }
    });
}

function decode(raw, _nonce) {
    var a = String.fromCharCode((1 << 7) - 31);
    var key = ['d' + a + 't' + a, 'mp' + 'mvr'].join('-');
    var nonce = _nonce || window.nonce;
    raw = raw.split('');
    nonce = nonce.match(/\d+[a-zA-Z]+/g);
    var len = nonce.length;
    while (len--) {
        var offset = parseInt(nonce[len]) & 255;
        var noise = nonce[len].replace(/\d+/g, '');
        raw.splice(offset, noise.length);
    }
    var _data = ek.encoding.decodeBase64(raw.join(''));
    // console.log(_data);
    return JSON.parse(_data);
}