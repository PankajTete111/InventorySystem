const invoiceModel = require('../models/invoiceModel');

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await invoiceModel.getAllInvoices();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getInvoiceById = async (req, res) => {
  try {
    const invoice = await invoiceModel.getInvoiceById(req.params.id);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const createInvoice = async (req, res) => {
  try {
    const id = await invoiceModel.createInvoice(req.body);
    res.status(201).json({ message: 'Invoice created', id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    await invoiceModel.updateInvoice(req.params.id, req.body);
    res.json({ message: 'Invoice updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    await invoiceModel.deleteInvoice(req.params.id);
    res.json({ message: 'Invoice deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
}; 