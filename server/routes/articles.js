'use strict'

const router = require('express').Router();
const {articleCreate, articleReadAll, articleReadByAuthor, articleReadById, articleUpdate, articleDelete} = require('../controllers/articles.controller');
const {verify} = require('../middlewares/auth');

router.get('/', articleReadAll)
// router.get('/', verify, articleReadByAuthor);
router.post('/', verify, articleCreate);
router.put('/', verify, articleUpdate);
router.delete('/', verify, articleDelete);
router.get('/:id', articleReadById);

module.exports = router;