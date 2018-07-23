
const { Controller } = require('egg')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const cookCache = require('../data/cook_cache.json')

class CookController extends Controller {
  async index() {
    const key = 'f762c03a2498c0ca3525701cfef60e23&cid'
    const cid = this.ctx.params.id
    let data = {}

    // 判断缓存有没有信息
    if (cookCache[`cid${cid}`]) {
      data = cookCache[`cid${cid}`]
    } else {
      const res = await axios.get(`https://apis.juhe.cn/cook/index?key=${key}&cid=${cid}`)
      data = res.data.result.data

      // http 转为 https
      data = JSON.stringify(data).replace(/http:/g, 'https:')
      cookCache[`cid${cid}`] = data
      fs.writeFile(path.join(__dirname, '../data/cook_cache.json'), JSON.stringify(cookCache, null, 2), 'utf8')
    }

    this.ctx.body = data
  }
}

module.exports = CookController
