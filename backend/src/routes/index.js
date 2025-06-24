const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const stockRoutes = require('./stockRoutes');

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/stock', stockRoutes);

module.exports = router; 