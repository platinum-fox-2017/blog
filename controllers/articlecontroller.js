const Artikel = require('../models/Artikel')

module.exports = {
  create: (req, res) => {
         Artikel.create({
             title: req.body.title,
             content: req.body.content
         })
         .then(articles => {
             res.status(200)
                 .json({
                     message: 'data berhasil di input',
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
         Artikel.find()
             .exec()
             .then(articles => {
                 res.status(200)
                     .json({
                         message: 'data ditampilkan',
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
       Artikel.updateOne(
         {_id: req.params.id},
         {$set:
             {
               title:req.body.title,
               content:req.body.content
             }
       })
         .then(data => {
             res.status(200)
               .json({
                   message: 'data berhasil di update'
               })
         })
         .catch(err => {
           res.status(401)
             .json({
               message: 'Failed to update article'
             })
         })
     },
     delete: (req, res) =>  {
       Artikel.findByIdAndRemove(req.params.id)
         .exec()
         .then(data => {
             res.status(200)
               .json({
                 message: 'data berhasil di delete'
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
