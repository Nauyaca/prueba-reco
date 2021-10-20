const {config} = require ('../config/index')
const SRAPIP = encodeURIComponent(config.dbiApiPass)

function checkApiKey(req, res, next){
    try{
      const apiKey = req.headers['api']
      if (apiKey == SRAPIP) next()
      else throw {status: 401, message: 'No autorizado', error: true}
    } catch(error){
      return res.status(error.status || 500).send({message: error.message})
    }
  }

  module.exports = {checkApiKey}
