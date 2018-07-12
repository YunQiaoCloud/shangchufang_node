
/**
 * @param {Egg.Application} app - egg application
 */

// key = f762c03a2498c0ca3525701cfef60e23
module.exports = (app) => {
  const { router, controller } = app
  router.get('/api/search', controller.search.index)
  router.get('/api/cook/:id', controller.cook.index)
  router.get('/api/cook_detail/:id', controller.cookDetail.index)
  router.get('/api/categores', controller.categores.index)
  router.get('/api/banner', controller.banner.index)
  router.get('/', controller.home.index)
}
