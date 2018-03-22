require('dotenv').config()
const express     = require('express')
const bodyParser  = require('body-parser')
const mongoose    = require('mongoose')
const cors        = require('cors')
const app         = express()

mongoose.connection.openUri('mongodb://localhost:27017/blog')
mongoose.Promise = global.Promise
mongoose.connection.once('open', () => {
  console.log('mongoose connection success')
}).on('error', (error) => {
  console.error('connection error', error)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/users'))
app.use('/api/articles', require('./routes/articles'))


module.exports = app
