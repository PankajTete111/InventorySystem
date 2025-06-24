const db = require('../config/db');

// Orders CRUD
async function getAllOrders() {
  const [rows] = await db.query('SELECT * FROM orders');
  return rows;
}

async function getOrderById(id) {
  const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
  return rows[0];
}

async function createOrder(order) {
  const { table_id, user_id, status } = order;
  const [result] = await db.query('INSERT INTO orders (table_id, user_id, status) VALUES (?, ?, ?)', [table_id, user_id, status || 'open']);
  return result.insertId;
}

async function updateOrder(id, order) {
  const { table_id, user_id, status, closed_at } = order;
  await db.query('UPDATE orders SET table_id = ?, user_id = ?, status = ?, closed_at = ? WHERE id = ?', [table_id, user_id, status, closed_at, id]);
}

async function deleteOrder(id) {
  await db.query('DELETE FROM orders WHERE id = ?', [id]);
}

// Order Items CRUD
async function getOrderItems(order_id) {
  const [rows] = await db.query('SELECT * FROM order_items WHERE order_id = ?', [order_id]);
  return rows;
}

async function addOrderItem(item) {
  const { order_id, product_id, quantity, price } = item;
  const [result] = await db.query('INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)', [order_id, product_id, quantity, price]);
  return result.insertId;
}

async function deleteOrderItem(id) {
  await db.query('DELETE FROM order_items WHERE id = ?', [id]);
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderItems,
  addOrderItem,
  deleteOrderItem,
}; 