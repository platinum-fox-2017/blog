const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const ArtikelSchema = new Schema({
    title : String,
    content : String
})

const Artikel = mongoose.model('Artikel', ArtikelSchema)

module.exports = Artikel;
