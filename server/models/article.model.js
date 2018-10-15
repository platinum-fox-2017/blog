const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Article', new Schema({
    title: String,
    description: String,
    user: { type: Schema.ObjectId, ref: 'User' },
}, {
    timestamps: true
}));