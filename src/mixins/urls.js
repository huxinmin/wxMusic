import wepy from 'wepy'

export default class Urls extends wepy.mixin {
  data = {
    swiperUrl: "http://musicapi.leanapp.cn/banner",
    recomandMusicsUrl:"http://musicapi.leanapp.cn/personalized",
    personalFmUrl:"http://musicapi.leanapp.cn/personal_fm",
    musicUrl:"http://musicapi.leanapp.cn/music/url?id="
  }
}
