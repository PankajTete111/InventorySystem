const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, stockController.getAllStock);
router.get('/:product_id', authenticateToken, stockController.getStockByProduct);
router.post('/', authenticateToken, stockController.addStockEntry);

module.exports = router; 