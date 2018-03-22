const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema (
  {
    title: String,
    description: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('article', articleSchema)