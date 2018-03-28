const express = require('express');
const router = express.Router();
const {destroy, signIn, signUp, findAll} = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', findAll);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.delete('/:id', destroy);

module.exports = router;
