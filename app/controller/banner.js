
const Controller = require('egg').Controller

class BannerController extends Controller {
  async index() {
    this.ctx.body = [
      {
        coverImg: '/static/f31fbe096b63f624eef2cdd78644ebf81b4ca3b3.jpg',
        title: '什锦蛋炒饭',
        id: '1637'
      },
      {
        coverImg: '/static/70f7edb967a246ad9761d2556fabfe70.jpeg',
        title: '袖珍小披萨',
        id: '2447'
      },
      {
        coverImg: '/static/df59ebb51ada46b589df0642f974969a_th.jpeg',
        title: '蜜蜂便当',
        id: '1915'
      },
      {
        coverImg: '/static/1511751285304_4304247182.jpg@340h_640w_1e_1c.jpg',
        title: '糖醋莲子藕',
        id: '1035'
      },
    ]
  }
}

module.exports = BannerController
