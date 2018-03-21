var express = require('express');
var router = express.Router();
const ArticleController = require('../controllers/articles')

/* GET users listing. */
router.get('/',ArticleController.viewAll)
router.post('/',ArticleController.create)
router.put('/:id',ArticleController.update)
router.delete('/:id',ArticleController.delete)

module.exports = router;
