const categoryModel = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const id = await categoryModel.createCategory(req.body);
    res.status(201).json({ message: 'Category created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    await categoryModel.updateCategory(req.params.id, req.body);
    res.json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryModel.deleteCategory(req.params.id);
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
}; 