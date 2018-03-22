const express         = require('express')
const router          = express.Router()
const { signup, signin, read, deleteByName, deleteAll }  = require('../controllers/users')

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/', read)
router.delete('/delete', deleteByName)
router.delete('/reset', deleteAll)

module.exports = router
