# wxMusic
微信小程序音乐，仿照的是网易云的安卓客户端APP


## 使用方法
将server目录拷贝放在你的域名服务器上，进入server端，运行
```js
node app.js
```
会启动一个服务器，然后将你的小程序的接口设置为你的域名，然后按照API的使用方法调取数据即可。

## 依赖
`wepy`腾讯的开源小程序框架
`NeteaseCloudMusicApi`第三方的网易云音乐 Nodejs API，地址为[`NeteaseCloudMusicApi`](https://github.com/Binaryify/NeteaseCloudMusicApi)

## 学到的知识点
1. scroll-view 中的需要滑动的元素不可以用 float 浮动；
2. scroll-view 中的包裹需要滑动的元素的大盒子用 display:flex; 是没有作用的；
3. scroll-view 中的需要滑动的元素要用 dislay:inline-block; 进行元素的横向编排；
4. 包裹 scroll-view 的大盒子有明确的宽和加上样式-->  overflow:hidden;white-space:nowrap;
5. swiper组件必须放在最外层，并且不能使用任何嵌套，无法内嵌组件
6. data-xxx属性不能使用大写或者驼峰式写法，会被转换成小写
7: Object.assig只能进行浅拷贝，无法进行深拷贝，假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
8: reducer中的state对象为引用对象时需要返回一个新对象，否则无法触发view重新渲染，例如数组就需要slice拷贝一份
9: redux-actions中的creatAction的types的名字不能一样否则会全部都dispatch
10: 可以使用自定义编译模式配置使得修改内容后不会再跳转到首页，而是跳到需要调试的页面