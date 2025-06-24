const db = require('../config/db');

async function getAllTables() {
  const [rows] = await db.query('SELECT * FROM tables WHERE is_active = 1');
  return rows;
}

async function getTableById(id) {
  const [rows] = await db.query('SELECT * FROM tables WHERE id = ? AND is_active = 1', [id]);
  return rows[0];
}

async function createTable(table) {
  const { table_number, status } = table;
  const [result] = await db.query('INSERT INTO tables (table_number, status) VALUES (?, ?)', [table_number, status || 'available']);
  return result.insertId;
}

async function updateTable(id, table) {
  const { table_number, status } = table;
  await db.query('UPDATE tables SET table_number = ?, status = ? WHERE id = ?', [table_number, status, id]);
}

async function deleteTable(id) {
  await db.query('UPDATE tables SET is_active = 0 WHERE id = ?', [id]);
}

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
}; 