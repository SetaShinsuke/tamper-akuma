# Tamper Akuma
## 说明
一些用于 tampermonkey 插件的脚本

## 如何添加 tampermonkey 脚本
在浏览器单机 tampermonkey 图标，选择【控制面板】，单击右上角【实用工具】，在下方从 【URL 安装】输入代码的 raw url（如：https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/google-translate-keymap.js ）

---

## BGB ( better-google-bilibili )
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/better-google-bilibili.js    
在 Google 搜索视频的时候，搜出的 B 站的结果中，经常有一些是 `"/s/video"` 下的链接，播放页面比较奇怪，这个脚本可以把链接改成正常的 `"/video"` 链接。

## GTK (google-translate-keymap)
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/google-translate-keymap.js    
使用 [谷歌翻译](https://translate.google.com/) 时，输入完按下 shift+enter 即可转到发音，再次按下 shift+enter 回到输入框，不用再繁琐的操作鼠标了。

## WSO (weibo-search-open)
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/wb-search-open.js
微博网页版左上角的搜索栏，实时搜索出博主的名字之后，并不能直接中键单击、在后台打开链接，而是把当前的 tab 跳转过去，这样会中断当前正在浏览的页面。
这个脚本可以实现中间点击，不再打扰当前的浏览。


## vgtime-auto-login
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/vgtime-auto-login.js  
游戏时光(VGTime)总是记不住登录状态，这个脚本可以在用户名密码自动填充的情况下，自动点击登录，恢复到登录状态。

## BMCE ( Bilibili Manga Credits Exchange) 
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bilibili-manga-credits-exchange.js
只需打开[B漫积分兑换页面](https://manga.bilibili.com/eden/credits-exchange.html?refresh=true)，便会自动将积分兑换为通用券（目前需要不停手动刷新）

## BEI (BM-EP-Index)
https://raw.githubusercontent.com/SetaShinsuke/tamper-akuma/master/scripts/bm-ep-index.js
给B漫章节目录添加真正的index（从1开始）