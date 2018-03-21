var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users')

router.get('/', UserController.viewAll)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)


module.exports = router;
