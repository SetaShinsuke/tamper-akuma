# ADB filters 规则踩坑

## 写在前面
~~折腾半天放弃了，这语法太容易错了，干脆把有语法错误的单独写到另一份文件去，能导入直接导入，不能导入手动添加完事~~
改用 Ublock Origin Lite 了，需要给与插件“允许运行用户脚本”的权限

## uBlock Origin说明
uBlock Origin 支持 `$script` 语法
```text
||fozekikikiminu.com^$script
||seccc.jasjas.xyz^$script
```
但 **Lite 版不支持**，所以改用 DNR 规则
uBlock Origin Lite 选项 -> 开发 -> 导入规则 -> 导入json文件
```json
[
  {
    "action": {
      "type": "block"
    },
    "condition": {
      "urlFilter": "||fozekikikiminu.com^"
    }
  }
]
```

------------------------------------------------
## URL导入：语法错误踩坑
### 错误1：`###` 与 `##`
**出错规则**：`xxx.com###div.theeffect section`
**出错原因**：`###` 只支持单个ID选择器或简单的属性选择器，后有空格导致错误
**修改**：改用`##`

### 错误2：中文
**出错规则**： `weibo.com#?#div.vue-recycle-scroller__item-view:-abp-has(div.wbpro-scroller-item>article div[class^="wbpro-tag"]>div:-abp-contains(荐读))`
**出错原因**：在 Adblock Plus 的规则中，:-abp-has() 和 :-abp-contains() 这类高级伪类选择器，当它们参数中需要匹配包含特定文本的元素时，这个文本（特别是中文）必须用引号（" "）或单引号（' '）括起来
**修改方法**：`weibo.com#?#div.vue-recycle-scroller__item-view:-abp-has(div.wbpro-scroller-item>article div[class^="wbpro-tag"]>div:-abp-contains("荐读"))`

### 错误3：abp-has需嵌套
**原规则**：`weibo.com#?#div.vue-recycle-scroller__item-view:-abp-has(div.wbpro-scroller-item>article div[class^="wbpro-tag-img"]>img)`
**已修改**：`weibo.com#?#div.vue-recycle-scroller__item-view:-abp-has(div.wbpro-scroller-item>article div[class^="wbpro-tag-img"]:-abp-has(>img))`

