'use strict'

const router = require('express').Router();
const {articleReadAll, articleCreate, articleUpdate, articleDelete} = require('../controllers/articles.controller');

router.get('/', articleReadAll);
router.post('/', articleCreate);
router.put('/', articleUpdate);
router.delete('/', articleDelete);

module.exports = router;