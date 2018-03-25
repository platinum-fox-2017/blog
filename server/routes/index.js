var express = require('express');
var router = express.Router();
const artikelcontroller = require('../controllers/articlecontroller')

/* GET home page. */
router.get('/', artikelcontroller.signin);
router.get('/artikel', artikelcontroller.findAll);
router.post('/artikel', artikelcontroller.create);
router.put('/artikel/:id', artikelcontroller.update);
router.delete('/artikel/:id', artikelcontroller.delete);

module.exports = router;
