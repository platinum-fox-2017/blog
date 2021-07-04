const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type : String,
    required : true,
    lowercase : true,
    unique : true,
    validate : /([a-z])\w+/
  },
  password: {
    type : String,
    required : true
  },
  isAdmin: Boolean
}, {
  timestamps: true
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('user', userSchema)