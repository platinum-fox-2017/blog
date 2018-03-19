'use strict'

const router = require('express').Router();
const {articleCreate, articleReadByAuthor, articleUpdate, articleDelete} = require('../controllers/articles.controller');
const {verify} = require('../middlewares/auth');

router.get('/', verify, articleReadByAuthor);
router.post('/', verify, articleCreate);
router.put('/', verify, articleUpdate);
router.delete('/', verify, articleDelete);

module.exports = router;