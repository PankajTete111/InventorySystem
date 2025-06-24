const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middlewares/authMiddleware');

// Orders
router.get('/', authenticateToken, orderController.getAllOrders);
router.get('/:id', authenticateToken, orderController.getOrderById);
router.post('/', authenticateToken, orderController.createOrder);
router.put('/:id', authenticateToken, orderController.updateOrder);
router.delete('/:id', authenticateToken, orderController.deleteOrder);

// Order Items
router.get('/:orderId/items', authenticateToken, orderController.getOrderItems);
router.post('/:orderId/items', authenticateToken, orderController.addOrderItem);
router.delete('/:orderId/items/:itemId', authenticateToken, orderController.deleteOrderItem);

module.exports = router; 