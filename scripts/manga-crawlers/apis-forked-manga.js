// 收集一些 API

// --- Afdian ----------------------------------------------------------
// GET 章节列表
// https://afdian.net/api/user/get-album-post?album_id=b9ea9b6c359411ecbd4252540025c377&lastRank=&rankOrder=desc&rankField=rank
API_AFDIAN_SERIES = 'https://afdian.net/api/user/get-album-post?album_id={ALBUM_ID}&lastRank=&rankOrder=desc&rankField=rank'

// GET 作品(章节)详情
// {ALBUM_ID} 可省略
// https://afdian.net/api/post/get-detail?post_id=8ae0ee4289d011eeb07952540025c377&album_id=b9ea9b6c359411ecbd4252540025c377
API_AFDIAN_ALBUM = 'https://afdian.net/api/post/get-detail?album_id={ALBUM_ID}&post_id={POST_ID}'

