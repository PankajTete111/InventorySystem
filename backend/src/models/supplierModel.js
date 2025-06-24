const db = require('../config/db');

async function getAllSuppliers() {
  const [rows] = await db.query('SELECT * FROM suppliers');
  return rows;
}

async function getSupplierById(id) {
  const [rows] = await db.query('SELECT * FROM suppliers WHERE id = ?', [id]);
  return rows[0];
}

async function createSupplier(supplier) {
  const { name, contact } = supplier;
  const [result] = await db.query('INSERT INTO suppliers (name, contact) VALUES (?, ?)', [name, contact]);
  return result.insertId;
}

async function updateSupplier(id, supplier) {
  const { name, contact } = supplier;
  await db.query('UPDATE suppliers SET name = ?, contact = ? WHERE id = ?', [name, contact, id]);
}

async function deleteSupplier(id) {
  await db.query('DELETE FROM suppliers WHERE id = ?', [id]);
}

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
}; 