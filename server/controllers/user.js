const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

require('dotenv').config()

module.exports = {
  signUp: (req, res, next) => {
    console.log('after/ req,body : ', req.body)

    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(req.body.password, salt)

    User
    .create({
      email: req.body.email,
      password: hash,
      name: req.body.name
    })
    .then(userData => {
      console.log('after/ userData : ', userData)
      res.status(201).json({
        message: '1 user created',
        userData
      })
    })
  },
  login: (req,res,next) => {
    console.log('login/ req.body : ', req.body)
    User
    .findOne({
      email : req.body.email
    })
    .then(user => {
      if(user){
        const checkPass = bcrypt.compareSync(req.body.password, user.password)
        if(checkPass) {
          console.log('checkPass : ', checkPass)
          let data = {
            id: user._id,
            name: user.name
          }
          console.log('env ',process.env.SECRET)
          jwt.sign(data, process.env.SECRET, (err, tokenJWT) => {
            console.log('tokenJWT : ', tokenJWT)
            res.status(200).json({
              message: 'user validate',
              tokenJWT,
              email: user.email,
              name: user.name
            })
          })
        }
      }
    })
    .catch(err => {
      next(err)
    })
  }
}