const express = require('express');
const router = express.Router();

module.exports = router
    .get('/', (req, res) => res.status(200).send({
        message: 'Welcome to Blog-API'
    }))
    .use('/articles', require('./article.route'))
    .use('/users', require('./user.route'))