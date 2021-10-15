const imagesRouters = require('./images')
const profileRouters = require('./profile')
const homeRouters = require('./home')
const viewerRouters = require('./viewer')


function routerApi(app){
  app.use('/images', imagesRouters)
  app.use('/profile', profileRouters)
  app.use('/home', homeRouters)
  app.use('/viewer', viewerRouters)
}

module.exports = routerApi
