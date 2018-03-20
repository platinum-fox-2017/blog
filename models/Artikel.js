const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const artikelSchema = new Schema({
    title : String,
    content : String
})

const Artikel = mongoose.model('Artikel', artikelSchema)

module.exports = Artikel;
