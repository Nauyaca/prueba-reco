const passport = require ('password')
const LocalStrategy = require('./strategies/local.strategies')

passport.use(LocalStrategy)

module.exports = passport

