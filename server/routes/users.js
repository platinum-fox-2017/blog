const express = require('express');
const router = express.Router();
const {signIn, signUp, findAll} = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', findAll);
router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
