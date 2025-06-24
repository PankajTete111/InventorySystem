const db = require('../config/db');

async function getAllCategories() {
  const [rows] = await db.query('SELECT * FROM categories');
  return rows;
}

async function getCategoryById(id) {
  const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
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
  await db.query('DELETE FROM categories WHERE id = ?', [id]);
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}; 