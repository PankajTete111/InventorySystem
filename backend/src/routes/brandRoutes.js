const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, brandController.getAllBrands);
router.get('/getBrand/:id', authenticateToken, brandController.getBrandById);
router.post('/create', authenticateToken, brandController.createBrand);
router.put('/update/:id', authenticateToken, brandController.updateBrand);
router.delete('/delete/:id', authenticateToken, brandController.deleteBrand);

module.exports = router; 