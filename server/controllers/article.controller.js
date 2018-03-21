const Article = require('../models/article.model')

module.exports = {
    create: (req, res) => {
        Article.create({
            title: req.body.title,
            body: req.body.body,
            user: req.headers.id        // id must be decoded from token local storage
        })
        .then(articles => {
            res.status(200)
                .json({
                    message: 'Article created',
                    articles
                })
        })
        .catch(error => {
            res.status(401)
                .json({
                    message: 'Failed to create artile'
                })
        })
    },
    findAll: (req, res) => {
        Article.find()
            .exec()
            .then(articles => {
                res.status(200)
                    .json({
                        message: 'Retrieved articles successfully',
                        articles
                    })
            })
            .catch(error => {
                res.status(401)
                    .json({
                        message: 'Failed to retrieve articles'
                    })
            })
    },
    update: (req, res) => {
        // console.log(req.body)
      Article.findByIdAndUpdate(req.params.id, {
          ...req.body
        })
        .exec()  
        .then(data => {
            res.status(200)
              .json({
                  message: 'Article successfully updated',
                  data
              })
        })
        .catch(err => {
          res.status(401)
            .json({
              message: 'Failed to update article'
            })
        })
    },
    deletion: (req, res) =>  {
      Article.findByIdAndRemove(req.params.id)
        .exec()
        .then(data => {
            res.status(200)
              .json({
                message: 'Record sucessfully deleted',
                data
              })
        })
        .catch(err => {
            res.status(401)
              .json({
                message: 'Unable to delete record',
                err
              })
        })
    }
}