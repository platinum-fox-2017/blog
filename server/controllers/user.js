const User = require('../models/user')

module.exports = {
  create: function (req, res, next) {
    console.log('req.body : ', req.body)
    User
      .create({
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
      })
      .then(data => {
        console.log('create / data : ', data)
        res.status(201).send({
          message: '1 user created',
          data
        })
      })
      .catch(err => {
        next(err);
      })
  },
  readUsers: (req, res, next) => {
    User
      .find()
      .then(user => {
        res.status(200).json({
          message: "Query Success",
          user
        })
      })
      .catch(err => {
        next(err)
      })
  },
}
