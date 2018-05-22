const userModel   = require('../models/users')
const jwt         = require('jsonwebtoken')

module.exports = {
  signup: (req, res) => {
    let objUser = {
      username  : req.body.username,
      password  : req.body.password
    }
    userModel.create(objUser)
    .then(user => {
      res.status(200).json({
        message : 'Success',
        user    : user,
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message,
      })
    })
  },

  signin: (req, res) => {
    userModel.findOne({
      username  : req.body.username,
      password  : req.body.password
    })
    .then(user => {
      // console.log(user);
      if (user) {
        // console.log('USER KETEMU');
        let jwtToken = {
          userId    : user._id,
          username  : user.username,
        }
        jwt.sign(jwtToken, process.env.TOKEN_KEY, { expiresIn: '6h' }, (err, token) => {
          if (!err) {
            res.status(200).json({
              message : 'Success',
              token, user
            })
          }
        })
      } else {
        res.status(202).json({
          message : 'Invalid Username or Password !!',
          token   : null
        })
      }
    })
    .catch(err => {
      // console.log('USER GAAAA KETEMU');
      res.status(500).json({
        message : 'Invalid Username or Password !!',
        error   : err.message
      })
    })
  },

  read: (req, res) => {
    userModel.find()
    .then(user => {
      res.status(200).json({
        message : 'Success',
        user
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message
      })
    })
  },

  deleteByName: (req, res) => {
    userModel.findOneAndRemove({ name: req.body.username })
    .then(() => {
      res.status(200).json({ message: 'Success' })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
  },

  deleteAll: (req, res) => {
    // userModel.collection.drop()
    userModel.remove({})
    .then(() => {
      res.status(200).json({ message: 'Success' })
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
  }
}
