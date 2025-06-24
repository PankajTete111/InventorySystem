const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const stockRoutes = require('./stockRoutes');
const orderRoutes = require('./orderRoutes');
const tableRoutes = require('./tableRoutes');
const supplierRoutes = require('./supplierRoutes');
const purchaseOrderRoutes = require('./purchaseOrderRoutes');
const invoiceRoutes = require('./invoiceRoutes');
const brandRoutes = require('./brandRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/stock', stockRoutes);
router.use('/orders', orderRoutes);
router.use('/tables', tableRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/purchase-orders', purchaseOrderRoutes);
router.use('/invoices', invoiceRoutes);
router.use('/brands', brandRoutes);
router.use('/categories', categoryRoutes);

module.exports = router; 