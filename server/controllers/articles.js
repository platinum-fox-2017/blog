const articleModel  = require('../models/articles')

module.exports = {
  create: (req, res) => {
    let objArticle = {
      title   : req.body.title,
      content : req.body.content,
      author  : req.decoded.userId,
    }
    // console.log('objArticle ===> ', objArticle);
    articleModel.create(objArticle)
    .then(article => {
      res.status(200).json({
        message : 'Success',
        article : article
      })
    })
    .catch(err => {
      res.status(500).json({
        message : 'Error',
        error   : err.message
      })
    })
  },

  read: (req, res) => {
    articleModel.find()
    .populate(['author'])
    .then(articles => {
      // console.log(articles)
      res.status(200).json({
        message : 'Success',
        articles
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message
      })
    })
  },

  readById: (req, res) => {
    articleModel.findOne({'_id': req.params.id})
    .then(article => {
      res.status(200).json({
        message : 'Success',
        article : article
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message
      })
    })
  },

  update: (req, res) => {
    articleModel.findOne({'_id': req.params.id})
    .then(article => {
      let objArticle = {
        title   : req.body.title || article.title,
        content : req.body.content || article.content,
        author  : req.decoded.userId,
      }
      articleModel.findOneAndUpdate({'_id': req.params.id}, {$set: objArticle}, {upsert: true, new: true})
      .then(newArticle => {
        res.status(200).json({
          message : 'Success',
          article : newArticle
        })
      })
      .catch(err => {
        res.status(400).json({
          message : 'Error',
          error   : err.message
        })
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message
      })
    })
  },

  delete: (req, res) => {
    articleModel.remove({'_id': req.params.id})
    .then(article => {
      res.status(200).json({
        message : 'Success',
        article : article
      })
    })
    .catch(err => {
      res.status(400).json({
        message : 'Error',
        error   : err.message
      })
    })
  }
}
