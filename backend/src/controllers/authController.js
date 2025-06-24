const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password, role } = req.body;
  console.log(req.body,"hhhh");
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  console.log(username, password, role,"username, password, role");
  try {
  console.log(username, password, role,"username, password, role");

    const existingUser = await userModel.findUserByUsername(username);
    console.log(existingUser,"existingUser");
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser(username, hashedPassword, role);
    res.status(201).json({ message: 'User registered', userId });
  } catch (err) {
    console.log(err.message,"err");
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  try {
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { register, login }; 