const mongoose    = require('mongoose')
const ObjectId    = mongoose.Types.ObjectId
const Schema      = mongoose.Schema

var ArticleSchema = new Schema({
  title: {
    type      : String,
    required  : true,
  },
  content: {
    type      : String,
    required  : true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref : 'User',
  }
})

module.exports = mongoose.model('Article', ArticleSchema)
