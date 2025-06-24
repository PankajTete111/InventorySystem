const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, brandController.getAllBrands);
router.get('/:id', authenticateToken, brandController.getBrandById);
router.post('/', authenticateToken, brandController.createBrand);
router.put('/:id', authenticateToken, brandController.updateBrand);
router.delete('/:id', authenticateToken, brandController.deleteBrand);

module.exports = router; 