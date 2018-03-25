const express = require('express');
const router = express.Router();
const user = require('./user')
const category = require('./category')
const article = require('./article')
const auth = require('../middleware/auth')

/* GET home page. */
router.use('/user', user)
router.use('/category', category)
router.use('/article', article)

module.exports = router;
