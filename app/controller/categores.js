
const Controller = require('egg').Controller
const _ = require('lodash')
const categoryData = require('../data/cook_category')

class categoresController extends Controller {
  async index() {
    // 洗牌算法打乱排序，使每次推荐的菜系都不同
    const list = categoryData[0].list
    const shufflelist = _.shuffle(list)

    this.ctx.body = shufflelist
  }
}

module.exports = categoresController
