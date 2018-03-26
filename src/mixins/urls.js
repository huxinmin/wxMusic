import wepy from 'wepy'

export default class Urls extends wepy.mixin {
  data = {
    swiperUrl: "http://127.0.0.1:3000/banner",
    recomandMusicsUrl:"http://127.0.0.1:3000/personalized",
    personalFmUrl:"http://musicapi.leanapp.cn/personal_fm",
    musicUrl:"http://musicapi.leanapp.cn/music/url?id="
  }
}
