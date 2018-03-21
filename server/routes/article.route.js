const express = require('express');
const router = express.Router();
const { findAll, findById, insert, update, drop } = require('../controllers/article.controller');

module.exports = router
    .get('/', findAll)
    .get('/:id', findById)
    .post('/', insert)
    .put('/:id', update)
    .delete('/:id', drop)