
const Controller = require('egg').Controller
const _ = require('lodash')
const categoryData = require('../data/cook_category')

class categoresController extends Controller {
  async index() {
    // 洗牌算法打乱排序，使每次推荐的菜系都不同
    const list = categoryData[0].list
    const shufflelist = _.shuffle(list)

    this.ctx.body = {
      recommend: shufflelist.slice(0, 3), // 推荐菜
      category: shufflelist.slice(3) // 菜系（不包括推荐部分）
    }
  }
}

module.exports = categoresController
