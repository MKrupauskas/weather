const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'weather',
    user: process.env.DB_USER || 'weather',
    password: process.env.DB_PASS || 'weather',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './weather.sqlite',
      operatorsAliases: Op
    }
  },
  authentication: {
    jwtSecret: process.env.JTW_SECRET || 'secret'
  }
}
