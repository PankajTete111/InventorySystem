const db = require('../config/db');

async function getAllInvoices() {
  const [rows] = await db.query('SELECT * FROM invoices');
  return rows;
}

async function getInvoiceById(id) {
  const [rows] = await db.query('SELECT * FROM invoices WHERE id = ?', [id]);
  return rows[0];
}

async function createInvoice(invoice) {
  const { order_id, total, paid } = invoice;
  const [result] = await db.query('INSERT INTO invoices (order_id, total, paid) VALUES (?, ?, ?)', [order_id, total, paid]);
  return result.insertId;
}

async function updateInvoice(id, invoice) {
  const { order_id, total, paid } = invoice;
  await db.query('UPDATE invoices SET order_id = ?, total = ?, paid = ? WHERE id = ?', [order_id, total, paid, id]);
}

async function deleteInvoice(id) {
  await db.query('DELETE FROM invoices WHERE id = ?', [id]);
}

module.exports = {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
}; 