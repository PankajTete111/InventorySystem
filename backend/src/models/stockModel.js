const pool = require('../config/db');

const getStockByProduct = async (product_id) => {
  const [rows] = await pool.query('SELECT SUM(CASE WHEN type = "in" THEN quantity ELSE -quantity END) as stock FROM stock_entries WHERE product_id = ?', [product_id]);
  return rows[0].stock || 0;
};

const addStockEntry = async (product_id, quantity, type, note = null) => {
  await pool.query('INSERT INTO stock_entries (product_id, quantity, type, note) VALUES (?, ?, ?, ?)', [product_id, quantity, type, note]);
};

const getAllStock = async () => {
  const [rows] = await pool.query('SELECT p.id as product_id, p.name, SUM(CASE WHEN s.type = "in" THEN s.quantity ELSE -s.quantity END) as stock FROM products p LEFT JOIN stock_entries s ON p.id = s.product_id GROUP BY p.id');
  return rows;
};

module.exports = {
  getStockByProduct,
  addStockEntry,
  getAllStock,
}; 