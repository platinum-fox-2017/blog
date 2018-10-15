const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
})


module.exports = mongoose.model('User', userSchema);
