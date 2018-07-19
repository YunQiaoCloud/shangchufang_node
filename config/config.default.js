const path = require('path')

module.exports = (appInfo) => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1530982095780_8716`

  // add your config here
  config.middleware = []

  config.static = {
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: false,
    prefix: '/static',
    dir: [path.join(appInfo.baseDir, '/frontend/dist/static/'), path.join(appInfo.baseDir, 'app/static')],
  }

  return config
}

// module.exports = {
//   view: {
//   },
// }
