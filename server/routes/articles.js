const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController.js');
const JWT = require('../middleware/jwt.js');
const memupload = require('../middleware/multer.js')

router.get('/user/:userId', JWT.authJWT, ArticleController.getArticle);
router.post('/post/:userId', memupload.single('field'), JWT.authJWT, ArticleController.createArticle);
router.put('/edit/:articleId', memupload.single('field'), JWT.authJWT, ArticleController.editArticle);
router.delete('/delete/:articleId', JWT.authJWT, ArticleController.deleteArticle);

module.exports = router;
