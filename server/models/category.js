const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let childSchema = new Schema(
  { 
    title: String,
    description: String 
  }
);

let categorySchema = new Schema (
  {
    name: String,
    articles: [childSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('category', categorySchema)