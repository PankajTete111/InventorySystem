const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/getAll', authenticateToken, categoryController.getAllCategories);
router.get('/get/:id', authenticateToken, categoryController.getCategoryById);
router.post('/create', authenticateToken, categoryController.createCategory);
router.put('/update/:id', authenticateToken, categoryController.updateCategory);
router.delete('/delete/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router; 