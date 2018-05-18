const AuthenticationController = require('./controllers/AuthenticationController')
const DataController = require('./controllers/DataController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/data', DataController.getWeather)
}
