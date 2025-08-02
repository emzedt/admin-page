const express = require('express');
const router = express.Router();
const pembelianController = require('../controllers/pembelianController');
const produkController = require('../controllers/produkController');

router.get('/', produkController.index);
router.get('/pembelian', pembelianController.list);
router.post('/pembelian/add', pembelianController.add);
router.post('/pembelian/cancel/:id', pembelianController.cancel);

module.exports = router;
