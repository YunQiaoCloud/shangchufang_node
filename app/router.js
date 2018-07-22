
/**
 * @param {Egg.Application} app - egg application
 */

// key = f762c03a2498c0ca3525701cfef60e23
module.exports = (app) => {
  const { router, controller } = app
  router.get('/api/v1/search', controller.search.index)
  router.get('/api/v1/cook/:id', controller.cook.index)
  router.get('/api/v1/cook_detail/:id', controller.cookDetail.index)
  router.get('/api/v1/categores', controller.categores.index)
  router.get('/api/v1/banner', controller.banner.index)

  // 交由前端处理
  router.get('/detail/:id', controller.home.index)
  router.get('/search', controller.home.index)
  router.get('/list', controller.home.index)
  router.get('/collect', controller.home.index)
  router.get('/', controller.home.index)
}
