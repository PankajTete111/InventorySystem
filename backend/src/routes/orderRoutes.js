const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middlewares/authMiddleware');

// Orders
router.get('/getAll', authenticateToken, orderController.getAllOrders);
router.get('/getOrder/:id', authenticateToken, orderController.getOrderById);
router.post('/create', authenticateToken, orderController.createOrder);
router.put('/updateOrder/:id', authenticateToken, orderController.updateOrder);
router.delete('/deleteOrder/:id', authenticateToken, orderController.deleteOrder);

// Order Items
router.get('/:orderId/items', authenticateToken, orderController.getOrderItems);
router.post('/:orderId/items', authenticateToken, orderController.addOrderItem);
router.delete('/:orderId/items/:itemId', authenticateToken, orderController.deleteOrderItem);

module.exports = router; 