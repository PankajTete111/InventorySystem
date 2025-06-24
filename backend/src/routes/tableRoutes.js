const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, tableController.getAllTables);
router.get('/:id', authenticateToken, tableController.getTableById);
router.post('/', authenticateToken, tableController.createTable);
router.put('/:id', authenticateToken, tableController.updateTable);
router.delete('/:id', authenticateToken, tableController.deleteTable);

module.exports = router; 