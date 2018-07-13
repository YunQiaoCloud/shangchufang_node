const Controller = require('egg').Controller
const cookDetailCache = require('../data/cook_details_cache.json')

class SearchController extends Controller {
  async index() {
    // 获取搜索内容
    const q = this.ctx.query.q
    console.log(q)
    this.ctx.body = [cookDetailCache.id6411]
  }
}

module.exports = SearchController
