const supplierModel = require('../models/supplierModel');

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierModel.getAllSuppliers();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const supplier = await supplierModel.getSupplierById(req.params.id);
    if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createSupplier = async (req, res) => {
  try {
    const id = await supplierModel.createSupplier(req.body);
    res.status(201).json({ message: 'Supplier created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateSupplier = async (req, res) => {
  try {
    await supplierModel.updateSupplier(req.params.id, req.body);
    res.json({ message: 'Supplier updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    await supplierModel.deleteSupplier(req.params.id);
    res.json({ message: 'Supplier deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
}; 