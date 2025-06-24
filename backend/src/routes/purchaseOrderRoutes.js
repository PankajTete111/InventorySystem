const express = require('express');
const router = express.Router();
const purchaseOrderController = require('../controllers/purchaseOrderController');
const authenticateToken = require('../middlewares/authMiddleware');

// Purchase Orders
router.get('/getAll', authenticateToken, purchaseOrderController.getAllPurchaseOrders);
router.get('/get/:id', authenticateToken, purchaseOrderController.getPurchaseOrderById);
router.post('/create', authenticateToken, purchaseOrderController.createPurchaseOrder);
router.put('/update/:id', authenticateToken, purchaseOrderController.updatePurchaseOrder);
router.delete('/delete/:id', authenticateToken, purchaseOrderController.deletePurchaseOrder);

// Purchase Order Items
router.get('/:purchaseOrderId/items', authenticateToken, purchaseOrderController.getPurchaseOrderItems);
router.post('/:purchaseOrderId/items', authenticateToken, purchaseOrderController.addPurchaseOrderItem);
router.delete('/:purchaseOrderId/items/:itemId', authenticateToken, purchaseOrderController.deletePurchaseOrderItem);

module.exports = router; 