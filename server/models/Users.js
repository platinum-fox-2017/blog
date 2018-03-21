const mongoose = require('mongoose')
const Schema = mongoose.Schema

function emailValidation(email){
    let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

const userSchema = new Schema({
    name:{
        type:String,
        required:['true','you must fill this field']
    },
    email:{
        type:String,
        unique:[true,'please use another email'],
        required:[true,'please fill in email'],
        validate:[emailValidation,'email format is not right']
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User