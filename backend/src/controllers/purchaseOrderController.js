const purchaseOrderModel = require('../models/purchaseOrderModel');

const getAllPurchaseOrders = async (req, res) => {
  try {
    const orders = await purchaseOrderModel.getAllPurchaseOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getPurchaseOrderById = async (req, res) => {
  try {
    const order = await purchaseOrderModel.getPurchaseOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Purchase order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createPurchaseOrder = async (req, res) => {
  try {
    const id = await purchaseOrderModel.createPurchaseOrder(req.body);
    res.status(201).json({ message: 'Purchase order created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updatePurchaseOrder = async (req, res) => {
  try {
    await purchaseOrderModel.updatePurchaseOrder(req.params.id, req.body);
    res.json({ message: 'Purchase order updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deletePurchaseOrder = async (req, res) => {
  try {
    await purchaseOrderModel.deletePurchaseOrder(req.params.id);
    res.json({ message: 'Purchase order deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Purchase Order Items
const getPurchaseOrderItems = async (req, res) => {
  try {
    const items = await purchaseOrderModel.getPurchaseOrderItems(req.params.purchaseOrderId);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const addPurchaseOrderItem = async (req, res) => {
  try {
    const id = await purchaseOrderModel.addPurchaseOrderItem({ ...req.body, purchase_order_id: req.params.purchaseOrderId });
    res.status(201).json({ message: 'Purchase order item added', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deletePurchaseOrderItem = async (req, res) => {
  try {
    await purchaseOrderModel.deletePurchaseOrderItem(req.params.itemId);
    res.json({ message: 'Purchase order item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllPurchaseOrders,
  getPurchaseOrderById,
  createPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
  getPurchaseOrderItems,
  addPurchaseOrderItem,
  deletePurchaseOrderItem,
}; 