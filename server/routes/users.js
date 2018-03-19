'use strict'

const router = require('express').Router();
const {userCreate, userReadById, userUpdate, userDelete} = require('../controllers/users.controller');

router.get('/', userReadById);
router.post('/', userCreate);
router.put('/', userUpdate);
router.delete('/', userDelete);

module.exports = router;