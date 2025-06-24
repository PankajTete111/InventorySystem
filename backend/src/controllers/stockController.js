const stockModel = require('../models/stockModel');

const getAllStock = async (req, res) => {
  try {
    const stock = await stockModel.getAllStock();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getStockByProduct = async (req, res) => {
  try {
    const stock = await stockModel.getStockByProduct(req.params.product_id);
    res.json({ product_id: req.params.product_id, stock });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const addStockEntry = async (req, res) => {
  const { product_id, quantity, type, note } = req.body;
  if (!product_id || !quantity || !type) {
    return res.status(400).json({ message: 'product_id, quantity, and type are required' });
  }
  try {
    await stockModel.addStockEntry(product_id, quantity, type, note);
    res.status(201).json({ message: 'Stock entry added' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllStock,
  getStockByProduct,
  addStockEntry,
}; 