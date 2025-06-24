const pool = require('../config/db');

const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products WHERE is_active = 1');
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ? AND is_active = 1', [id]);
  return rows[0];
};

const createProduct = async (product) => {
  const { name, brand_id, category_id, price, size_ml, barcode } = product;
  const [result] = await pool.query('INSERT INTO products (name, brand_id, category_id, price, size_ml, barcode) VALUES (?, ?, ?, ?, ?, ?)', [name, brand_id, category_id, price, size_ml, barcode]);
  return result.insertId;
};

const updateProduct = async (id, product) => {
  const { name, brand_id, category_id, price, size_ml, barcode } = product;
  await pool.query('UPDATE products SET name=?, brand_id=?, category_id=?, price=?, size_ml=?, barcode=? WHERE id=?', [name, brand_id, category_id, price, size_ml, barcode, id]);
};

const deleteProduct = async (id) => {
  await pool.query('UPDATE products SET is_active = 0 WHERE id = ?', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}; 