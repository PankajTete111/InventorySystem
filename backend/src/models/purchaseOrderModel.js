const db = require('../config/db');

// Purchase Orders CRUD
async function getAllPurchaseOrders() {
  const [rows] = await db.query('SELECT * FROM purchase_orders');
  return rows;
}

async function getPurchaseOrderById(id) {
  const [rows] = await db.query('SELECT * FROM purchase_orders WHERE id = ?', [id]);
  return rows[0];
}

async function createPurchaseOrder(order) {
  const { supplier_id, user_id, status } = order;
  const [result] = await db.query('INSERT INTO purchase_orders (supplier_id, user_id, status) VALUES (?, ?, ?)', [supplier_id, user_id, status || 'pending']);
  return result.insertId;
}

async function updatePurchaseOrder(id, order) {
  const { supplier_id, user_id, status, received_at } = order;
  await db.query('UPDATE purchase_orders SET supplier_id = ?, user_id = ?, status = ?, received_at = ? WHERE id = ?', [supplier_id, user_id, status, received_at, id]);
}

async function deletePurchaseOrder(id) {
  await db.query('DELETE FROM purchase_orders WHERE id = ?', [id]);
}

// Purchase Order Items CRUD
async function getPurchaseOrderItems(purchase_order_id) {
  const [rows] = await db.query('SELECT * FROM purchase_order_items WHERE purchase_order_id = ?', [purchase_order_id]);
  return rows;
}

async function addPurchaseOrderItem(item) {
  const { purchase_order_id, product_id, quantity, price } = item;
  const [result] = await db.query('INSERT INTO purchase_order_items (purchase_order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)', [purchase_order_id, product_id, quantity, price]);
  return result.insertId;
}

async function deletePurchaseOrderItem(id) {
  await db.query('DELETE FROM purchase_order_items WHERE id = ?', [id]);
}

module.exports = {
  getAllPurchaseOrders,
  getPurchaseOrderById,
  createPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
  getPurchaseOrderItems,
  addPurchaseOrderItem,
  deletePurchaseOrderItem,
}; 