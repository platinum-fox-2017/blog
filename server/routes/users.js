'use strict'

const router = require('express').Router();
const {userCreate, userReadById, userUpdate, userDelete} = require('../controllers/users.controller');
const {verify} = require('../middlewares/auth');

router.get('/', verify, userReadById);
router.post('/', userCreate);
router.put('/', verify, userUpdate);
router.delete('/', verify, userDelete);

module.exports = router;