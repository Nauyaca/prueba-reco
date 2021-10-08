const imagesRouters = require('./images')
const profileRouters = require('./profile')
const homeRouters = require('./home')


function routerApi(app){
  app.use('/images', imagesRouters)
  app.use('/profile', profileRouters)
  app.use('/home', homeRouters)
}

module.exports = routerApi
