const db = require('../config/db');

async function getAllTables() {
  const [rows] = await db.query('SELECT * FROM tables');
  return rows;
}

async function getTableById(id) {
  const [rows] = await db.query('SELECT * FROM tables WHERE id = ?', [id]);
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
  await db.query('DELETE FROM tables WHERE id = ?', [id]);
}

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
}; 