const pool = require('../config/db');

const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT p.*, b.name as brand, c.name as category FROM products p LEFT JOIN brands b ON p.brand_id = b.id LEFT JOIN categories c ON p.category_id = c.id');
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
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
  await pool.query('DELETE FROM products WHERE id = ?', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}; 