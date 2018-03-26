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
