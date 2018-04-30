const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email!'
          })
          break
        case 'password':
          res.status(400).send({
            error: `You must provide a valid password!
            <br>
            1. It must only contain lowercase, upercase alphanumeric characters
            <br> 
            2. The password must be between 8 and 32 characters in length`
          })
          break
        default:
          res.status(400).send({ error: 'Invalid registration credentials!' })
      }
    } else {
      next()
    }
  }
}
