var express = require('express');
var article = express.Router();
const {create, findAll, update, deletion} = require('../controllers/article.controller')

article.get('/', findAll)
article.post('/', create)
article.put('/:id', update)
article.delete('/:id', deletion)

module.exports = article