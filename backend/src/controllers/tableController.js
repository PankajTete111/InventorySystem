const tableModel = require('../models/tableModel');

const getAllTables = async (req, res) => {
  try {
    const tables = await tableModel.getAllTables();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getTableById = async (req, res) => {
  try {
    const table = await tableModel.getTableById(req.params.id);
    if (!table) return res.status(404).json({ message: 'Table not found' });
    res.json(table);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createTable = async (req, res) => {
  try {
    const id = await tableModel.createTable(req.body);
    res.status(201).json({ message: 'Table created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateTable = async (req, res) => {
  try {
    await tableModel.updateTable(req.params.id, req.body);
    res.json({ message: 'Table updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteTable = async (req, res) => {
  try {
    await tableModel.deleteTable(req.params.id);
    res.json({ message: 'Table deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
}; 