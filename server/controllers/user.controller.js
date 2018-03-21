const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    register: (req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        .then(data => {
            res.status(200)
                .json({
                    message: 'User succesfully created',
                    data
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'Unable to register user',
                    err
                })
        })
    },
    login: (req, res) => {
        let email = req.body.email
        let username = req.body.username
        let password = req.body.password
        User.findOne({
            username: username
        })
        .then(data => {
            if(bcrypt.compareSync(password, data.password)){
                let token = jwt.sign({
                    id: data._id,
                    username: data.username,
                    email: data.email,
                }, 'secret')
                res.status(200).json({
                    message: 'Login success',
                    token
                })
            } else {
                res.status(401)
                    .json({
                        message: 'Password does not match'
                    })   
            }
        })
        .catch(err => {
            res.status(404)
                .json({
                    message: 'User not found'
                })
        })
    },
    getAllUsers: (req, res) => {
        User.find()
          .exec()
          .then(users => {
            res.status(200)
            .json({
              message: 'All user retrieved',
              users
            })
          })
          .catch(err => {
            res.status(400)
            .json({
              message: 'Failed to retrieve users',
              err
            })
          })
    }
}