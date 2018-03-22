const Article = require('../models/article')

module.exports = {
  home: (req, res, next) => {
    Article
      .find()
      .then(article => {
        res.json(article)
      })
      .catch(err => {
        next(err)
      })
  },
  create: function (req, res, next) {
    Article
      .create({
        title: String(req.body.title),
        description: String(req.body.description),
      })
      .then(data => {
        res.status(201).send({
          message: '1 article created',
          data
        })
      })
      .catch(err => {
        next(err);
      })
  },
  update: function(req, res, next) {
    console.log(req.decoded, req.body);
    Article
      .findByIdAndUpdate(req.params.id,{
        title: String(req.body.title),
        description: String(req.body.description)
      }) 
      .then(data => {
        res.status(200).send({
          message: '1 Article updated',
          data
        })
      }) 
      .catch(err => {
        next(err);
      })  
  },
  destroy: (req, res, next) => {
    Article
      .findByIdAndRemove(req.params.id)
      .then(article => {
        res.status(200).json({
          message: '1 article deleted'
        })
      })
      .catch(err=>{
        next(err)
      })
  }
}
