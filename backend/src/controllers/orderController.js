const orderModel = require('../models/orderModel');

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.getOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const id = await orderModel.createOrder(req.body);
    res.status(201).json({ message: 'Order created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    await orderModel.updateOrder(req.params.id, req.body);
    res.json({ message: 'Order updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await orderModel.deleteOrder(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Order Items
const getOrderItems = async (req, res) => {
  try {
    const items = await orderModel.getOrderItems(req.params.orderId);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const addOrderItem = async (req, res) => {
  try {
    const id = await orderModel.addOrderItem({ ...req.body, order_id: req.params.orderId });
    res.status(201).json({ message: 'Order item added', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteOrderItem = async (req, res) => {
  try {
    await orderModel.deleteOrderItem(req.params.itemId);
    res.json({ message: 'Order item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderItems,
  addOrderItem,
  deleteOrderItem,
}; 