const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, supplierController.getAllSuppliers);
router.get('/getSupplier/:id', authenticateToken, supplierController.getSupplierById);
router.post('/create', authenticateToken, supplierController.createSupplier);
router.put('/update/:id', authenticateToken, supplierController.updateSupplier);
router.delete('/delete/:id', authenticateToken, supplierController.deleteSupplier);

module.exports = router; 