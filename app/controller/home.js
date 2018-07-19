
const Controller = require('egg').Controller
const fs = require('fs')
const path = require('path')

class HomeController extends Controller {
  async index() {
    const file = path.resolve(__dirname, '../../frontend/dist/index.html')
    this.ctx.set('Content-Type', 'text/html')
    this.ctx.body = await fs.readFileSync(file)
  }
}

module.exports = HomeController
