const Article = require('../models/articles.model');

module.exports = {
  findAll (req, res) {
    Article
      .find()
      .populate('author')
      .sort('-createdAt')
      .exec()
      .then(data => {
        return res.status(200).json({
          message: `succeed get all articles data`,
          data
        })
      })
      .catch(err => {
        return res.status(500).json({
          message: `failed to get all articles data`,
          err
        })
      })
  },
  findById (req, res) {
    Article.findOne({
      _id : req.params.id
    })
      .populate('author')
      .exec()
      .then(data => {
        return res.status(200).json({
          message: `succeed get article by id`,
          data
        })
      })
      .catch(err => {
        return res.status(400).json({
          message: `failed get article by id`,
          err
        })
      })
  },
  create (req, res) {
    Article.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    })
      .then(data => {
        res.status(201).json({
          message: `succeed to create new article`,
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: `failed to create new article`,
          err
        })
      })
  },
  update (req, res) {
    Article.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
      .then(data => {
        return res.status(200).json({
          message: 'succeed update article data',
          data
        })
      })
      .catch(err => {
        return res.status(400).json({
          message: `failed to update article data`,
          err
        })
      })
  },
  destroy (req, res) {
    Article.findByIdAndRemove(
      req.params.id
    )
      .then(() => {
        return res.status(200).json({
          message: `succeed to delete article`
        })
      })
      .catch(err => {
        return res.status(400).json({
          message: `failed to delete article`,
          err
        })
      })
  }
}
