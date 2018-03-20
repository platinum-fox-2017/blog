var express = require('express');
var user = express.Router();
const {login, register, getAllUsers} = require('../controllers/user.controller')

/* GET users listing. */
// user.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

user.post('/register', register)
user.post('/login', login)
user.get('/', getAllUsers)

module.exports = user;
