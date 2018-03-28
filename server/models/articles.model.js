const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
},{
  timestamps: true,
});

module.exports = mongoose.model('Article', articleSchema);
