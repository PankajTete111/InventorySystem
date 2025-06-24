const pool = require('../config/db');

const findUserByUsername = async (username) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

const createUser = async (username, hashedPassword, role = 'staff') => {
  console.log(username, hashedPassword, role,"createUser");
  console.log(pool,"pool");
  const [result] = await pool.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role]);
  return result.insertId;
};

module.exports = {
  findUserByUsername,
  createUser,
}; 