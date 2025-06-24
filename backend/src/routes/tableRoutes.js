const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, tableController.getAllTables);
router.get('/getTable/:id', authenticateToken, tableController.getTableById);
router.post('/ceate', authenticateToken, tableController.createTable);
router.put('/update/:id', authenticateToken, tableController.updateTable);
router.delete('/delete/:id', authenticateToken, tableController.deleteTable);

module.exports = router; 