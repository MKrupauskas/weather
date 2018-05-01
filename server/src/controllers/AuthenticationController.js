const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(500).send({ error: 'We ran into an issue :( Try again.' })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(401).send({
          error: 'The login information was incorrect! cant get the user'
        })
      }

      // TODO: THE ERROR IS HERE
      const isPasswordValid = await user.comparePassword(password)

      console.log('\n\n\n', isPasswordValid)

      if (!isPasswordValid) {
        return res.status(401).send({
          error: 'The login information was incorrect! pass'
        })
      }

      const userJSON = user.toJSON()
      jwtSignUser(userJSON)

      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
      res.send('ayyayayyayay')
    } catch (err) {
      res.status(500).send({ error: 'We ran into an issue :( Try again. login' })
    }
  }
}
