const db = require('../config/db');

async function getAllCategories() {
  const [rows] = await db.query('SELECT * FROM categories WHERE is_active = 1');
  return rows;
}

async function getCategoryById(id) {
  const [rows] = await db.query('SELECT * FROM categories WHERE id = ? AND is_active = 1', [id]);
  return rows[0];
}

async function createCategory(category) {
  const { name } = category;
  const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
  return result.insertId;
}

async function updateCategory(id, category) {
  const { name } = category;
  await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
}

async function deleteCategory(id) {
  await db.query('UPDATE categories SET is_active = 0 WHERE id = ?', [id]);
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}; 