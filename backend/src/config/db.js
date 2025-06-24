const mysql = require('mysql2/promise');
require('dotenv').config();


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// console.log("Database Connected");

// Test DB connection on startup
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL database connected successfully!');
    connection.release();
  } catch (err) {
    console.error('❌ MySQL database connection failed:', err.message);
  }
})();

module.exports = pool; 