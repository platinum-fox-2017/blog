const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: String,
  password: String,
  isAdmin: Boolean
}, {
  timestamps: true
})

module.exports = mongoose.model('user', userSchema)