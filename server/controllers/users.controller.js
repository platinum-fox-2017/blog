const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRound = 10;

module.exports = {
  findAll (req, res) {
    User.find()
        .exec()
        .then(data => {
          res.status(200).json({
            message: 'get all users data',
            data
          })
        })
  },

  signUp (req, res) {
    let hashedPassword = bcrypt.hashSync(req.body.password, saltRound);
    User.find({
      $or : [
        {username: req.body.username},
        {email: req.body.email}
      ]
    })
      .exec()
      .then(data => {
        if(data.length){
          return res.status(400).json({
            message: 'username or password already taken!'
          })
        }
        else {
          User.create({
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            email: req.body.email
          })
            .then(data => {
              let token = jwt.sing({userId: data._id},'secret');
              return res.status(201).json({
                message : 'succeed create new account',
                token,
                data
              })
            })
            .catch(err => {
              return res.status(400).json({
                message : 'failed create new account',
                err
              })
            })
        }
      })

  },

  signIn (req,res) {
    User.findOne({
      $or: [
        {username: req.body.username},
        {email: req.body.email}
      ]
    })
      .exec()
      .then(data => {
        if(data){
          let passwordCheck = bcrypt.compareSync(req.body.password, data.password);

          if(passwordCheck){
            let token = jwt.sign({userId: data._id}, 'secret');
            return res.status(200).json({
              message: 'succeed to sign in',
              token,
              data
            })
          }
          else {
            return res.status(400).json({
              message: 'sign in failed, wrong password'
            })
          }
        }
      })
      .catch(err => {
        return res.status(400).json({
          message: 'sign in failed, wrong username or email',
        })
      })
    }

  }
