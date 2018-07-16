const {
  Controller
} = require('egg')
const axios = require('axios')
const fs = require('fs')
const _ = require('lodash')
const path = require('path')

const cookDetailCache = require('../data/cook_details_cache.json')
const cookCache = require('../data/cook_cache.json')

class CookDetailController extends Controller {
  traverseCook(id) {
    const array = Object.keys(cookCache)

    for (let i = 0; i < array.length; i += 1) {
      const categoryKey = array[i]
      const cooks = cookCache[categoryKey]
      const index = _.findIndex(cooks, ['id', `${id}`])
      if (index !== -1) {
        return cooks[index]
      }
    }
  }

  getCookDetail(id) {
    if (cookDetailCache[`id${id}`]) {
      return cookDetailCache[`id${id}`]
    }

    // 如果没找到，去上一级分类找
    return this.traverseCook(id)
  }

  async index() {
    const key = 'f762c03a2498c0ca3525701cfef60e23&cid'
    const id = this.ctx.params.id

    let data = this.getCookDetail(id)

    // 判断缓存有没有信息
    if (!data) {
      const res = await axios.get(`http://apis.juhe.cn/cook/queryid?key=${key}&id=${id}`)
      data = res.data.result.data[0]

      // 存入缓存
      cookDetailCache[`id${id}`] = data
      fs.writeFile(path.join(__dirname, '../data/cook_details_cache.json'), JSON.stringify(cookDetailCache, null, 2), 'utf8')
    }

    this.ctx.body = data
  }
}

module.exports = CookDetailController
