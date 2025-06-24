const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, invoiceController.getAllInvoices);
router.get('/getInvoice/:id', authenticateToken, invoiceController.getInvoiceById);
router.post('/create', authenticateToken, invoiceController.createInvoice);
router.put('/update/:id', authenticateToken, invoiceController.updateInvoice);
router.delete('/delete/:id', authenticateToken, invoiceController.deleteInvoice);

module.exports = router; 