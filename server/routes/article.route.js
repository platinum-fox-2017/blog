const express = require('express');
const router = express.Router();
const { verify } = require('../middlewares/token.middleware');
const { findAll, findById, insert, update, drop } = require('../controllers/article.controller');

module.exports = router
    .get('/', findAll)
    .get('/:id', findById)
    .post('/', verify, insert)
    .put('/:id', verify, update)
    .delete('/:id', verify, drop)