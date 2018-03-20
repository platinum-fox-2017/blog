const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title:{
        type:String,
        default: 'unnamed article'
    },
    body:String,
    userId:{type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true})

const Article = mongoose.model('Article',articleSchema)
module.exports = Article