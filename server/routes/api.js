const express = require('express');
const router = express.Router();
// const users = require('./user')
// const transactions = require('./transaction')
const category = require('./category')
const article = require('./article')

/* GET home page. */
router.use('/category', category)
router.use('/article', article)

module.exports = router;
