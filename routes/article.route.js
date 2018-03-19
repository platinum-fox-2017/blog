const express = require('express');
const router = express.Router();
const { findAll, insert, update, drop } = require('../controllers/article.controller');

module.exports = router
    .get('/', findAll)
    .post('/', insert)
    .put('/:id', update)
    .delete('/:id', drop)