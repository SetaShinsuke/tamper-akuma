// 收集一些 API

// --- Afdian ----------------------------------------------------------
// GET 章节列表
// https://afdian.net/api/user/get-album-post?album_id=b9ea9b6c359411ecbd4252540025c377&lastRank=&rankOrder=desc&rankField=rank
API_AFDIAN_SERIES = 'https://afdian.net/api/user/get-album-post?album_id={ALBUM_ID}&lastRank=&rankOrder=desc&rankField=rank'

// GET 作品(章节)详情
// {ALBUM_ID} 可省略
// https://afdian.net/api/post/get-detail?post_id=8ae0ee4289d011eeb07952540025c377&album_id=b9ea9b6c359411ecbd4252540025c377
API_AFDIAN_ALBUM = 'https://afdian.net/api/post/get-detail?album_id={ALBUM_ID}&post_id={POST_ID}'


// --- 来漫画 laimanhua8.com -------------------------------------------------
// 单话详情（需要爬 ）
// picTree -> decode 之后为真实数据
// https://www.laimanhua8.com/kanmanhua/JOJOdeqimiaomaoxianPrat9TheJOJOLands/77180006.html
API_CHAP_DETAIL = 'https://www.laimanhua8.com/kanmanhua/JOJOdeqimiaomaoxianPrat9TheJOJOLands/77180006.html'

// 参考 JS: https://greasyfork.org/fr/scripts/379912-%E8%87%AA%E5%8A%A8%E4%B8%8B%E8%BD%BD%E6%9D%A5%E6%BC%AB%E7%94%BB%E7%9A%84%E6%BC%AB%E7%94%BB%E5%88%B0%E7%94%B5%E8%84%91v2/code
function getUrlpics(picTree) {
    var PicUrls = picTree;
    if (PicUrls.indexOf("mh160tuku") == -1)
        PicUrls = base64_decode(picTree);
    if (PicUrls.indexOf("JLmh160") != -1) {
        PicUrls = ithmsh(PicUrls);
    } else if (PicUrls.indexOf("TWmh160") != -1) {
        PicUrls = itwrnm(PicUrls);
    }
    var PicUrlArr = PicUrls.split("$qingtiandy$");
    return PicUrlArr
}

// --- 漫画芯 ------------------------------------------------------
// 章节列表
// `#chapter-list-1>li>a`
// https://www.mhxin.com/manhua/qingsehuoyan/
// 章节详情
// chapterImages
// https://www.mhxin.com/manhua/qingsehuoyan/1356202.html


// --- 大树漫画 ----------------------------------------------------
// 章节列表
// `#ul_chapter2>li>a` 
// https://www.dashumanhua.com/comic/qiaoqiaofuyinqiaoqiaodeqimiaomaoxiandi8bu/


// --- 包子漫画 cn.baozimh.com
// 章节列表
// `.comics-chapters a` href
// https://cn.baozimh.com/comic/heguangzhiyuanhui-tanjiu
// 图片列表
// `amp-img` [data-src]
// https://cn.czmanga.com/comic/chapter/heguangzhiyuanhui-tanjiu/0_14.html


// --- 笔趣阁 bq8.org
// 章节目录
// https://www.bq8.org/index.php/api/comic/chapter?mid=8824
// 章节详情（爬）
// `.rd-article__pic>img` [data-original]
// https://www.bq8.org/index.php/chapter-811211.html

//  Goda
// 章节详情（爬）
// `.text-center>div>img` [data-src]
// https://m.cocolamanhua.com/manga/49x49-manyanxingkong/3

