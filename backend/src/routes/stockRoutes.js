const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, stockController.getAllStock);
router.get('/stockBy/:product_id', authenticateToken, stockController.getStockByProduct);
router.post('/create', authenticateToken, stockController.addStockEntry);

module.exports = router; 