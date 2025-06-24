const brandModel = require('../models/brandModel');

const getAllBrands = async (req, res) => {
  try {
    const brands = await brandModel.getAllBrands();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getBrandById = async (req, res) => {
  try {
    const brand = await brandModel.getBrandById(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Brand not found' });
    res.json(brand);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createBrand = async (req, res) => {
  try {
    const id = await brandModel.createBrand(req.body);
    res.status(201).json({ message: 'Brand created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    await brandModel.updateBrand(req.params.id, req.body);
    res.json({ message: 'Brand updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    await brandModel.deleteBrand(req.params.id);
    res.json({ message: 'Brand deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
}; 