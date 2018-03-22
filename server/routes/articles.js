const express           = require('express')
const jwt               = require('jsonwebtoken')
const router            = express.Router()
const articleController = require('../controllers/articles')
const articleModel      = require('../models/articles')

var auth = (req, res, next) => {
  let decoded = jwt.verify(req.headers.token, 'hahaha3x')
  if (decoded) {
    req.decoded = decoded
    next()
  } else {
    res.status(400).json({ message : 'User not authorize !!' })
  }
}

router.post('/', auth, articleController.create)
router.get('/', articleController.read)
router.get('/:id', articleController.readById)
router.put('/:id', auth, articleController.update)
router.delete('/:id', auth, articleController.delete)

module.exports = router
