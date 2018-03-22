const mongoose    = require('mongoose')
const validator   = require('mongoose-unique-validator')
const ObjectId    = mongoose.Types.ObjectId
const Schema      = mongoose.Schema

var UserSchema = new Schema({
  username: {
    type      : String,
    required  : true,
    trim      : true,
    lowercase : true,
    unique    : true,
    validate  : /([a-z])\w+/,
  },
  password: {
    type      : String,
    required  : true,
  }
})

UserSchema.plugin(validator, { message: 'Username {VALUE} already register !!' })
module.exports = mongoose.model('User', UserSchema)
