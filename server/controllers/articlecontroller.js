const Artikel = require('../models/Artikel')
const FB   = require('fb')

module.exports = {
  signin:(req,res) => {
    FB.setAccessToken(req.headers.token);
    FB.api('me', {fields: ['id' , 'name', 'email', 'gender', 'picture'], access_token: req.headers.token}, function(userData) {
      res.status(200)
          .json({
              name: userData.name,
              foto: userData.picture.data.url
          })
    })
  },
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
         Artikel.find().sort( { _id: -1 } )
             .then(articles => {
                 res.status(200)
                     .json({
                         message: 'data ditampilkan di home',
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
