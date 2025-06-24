const db = require('../config/db');

async function getAllBrands() {
  const [rows] = await db.query('SELECT * FROM brands');
  return rows;
}

async function getBrandById(id) {
  const [rows] = await db.query('SELECT * FROM brands WHERE id = ?', [id]);
  return rows[0];
}

async function createBrand(brand) {
  const { name } = brand;
  const [result] = await db.query('INSERT INTO brands (name) VALUES (?)', [name]);
  return result.insertId;
}

async function updateBrand(id, brand) {
  const { name } = brand;
  await db.query('UPDATE brands SET name = ? WHERE id = ?', [name, id]);
}

async function deleteBrand(id) {
  await db.query('DELETE FROM brands WHERE id = ?', [id]);
}

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
}; 