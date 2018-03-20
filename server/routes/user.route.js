const express = require('express');
const router = express.Router();
const { insert, login } = require('../controllers/user.controller');

module.exports = router
    .post('/', insert)
    .post('/login', login)