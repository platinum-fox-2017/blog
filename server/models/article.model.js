const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    title: String,
    body: String,
    created_date: {
        type: Date,
        default: new Date()
    },
    updated_at: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
articleSchema.pre('update', function (){
    this.updated_at({}, {$set: {updated_at: new Date()}})
})

module.exports = mongoose.model('Article', articleSchema)