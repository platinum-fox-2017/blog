const Category = require('../models/category')

module.exports = {
  home: (req, res, next) => {
    Category
      .find()
      .then(category => {
        console.log('home / category : ', category)
        res.status(200).json({
          message: 'query success',
          category
        })
      })
      .catch(err => {
        next(err)
      })
  },
  create: function (req, res, next) {
    console.log('req.body : ', req.body)
    Category
      .create({
        name: req.body.name
      })
      .then(data => {
        console.log('create / data : ', data)
        res.status(201).send({
          message: '1 product created',
          data
        })
      })
      .catch(err => {
        next(err);
      })
  },
  update: function(req, res, next) {
    console.log(req.decoded, req.body);
    Category
      .findByIdAndUpdate(req.params.id,{
        name: String(req.body.name) 
      }) 
      .then(data => {
        res.status(200).send({
          message: '1 category updated',
          data
        })
      }) 
      .catch(err => {
        next(err);
      })  
  },
  destroy: (req, res, next) => {
    Category
      .findByIdAndRemove(req.params.id)
      .then(category => {
        res.status(200).json({
          message: '1 category deleted'
        })
      })
      .catch(err=>{
        next(err)
      })
  }
}
