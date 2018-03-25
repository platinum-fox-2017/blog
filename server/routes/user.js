const express = require('express');
const router = express.Router();
// const { auth } = require('../middleware/auth')
const { create, readUsers } = require('../controllers/user')

router.get('/', readUsers )
router.post('/', create )

module.exports = router;
