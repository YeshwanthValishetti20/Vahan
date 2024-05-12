require('dotenv').config(); // Load environment variables from .env file

// Database configuration
const config = {
  db: {
      host: 'sql6.freemysqlhosting.net',               // Database host
      user: 'sql6705432',                              // Database user
      password: 'ltL7yxVFEh',                          // Database password
      database: 'sql6705432',                          // Database name
      connectTimeout: process.env.DB_CONNECT_TIMEOUT || 10000,  // Connection timeout in milliseconds, default: 10 seconds
      dateStrings: process.env.DB_DATE_STRINGS === 'true' || true // Convert date objects to strings, default: true
  },
  listPerPage: 10 // Number of items to display per page
};

module.exports = config;
