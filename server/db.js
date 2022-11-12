const Pool = require('pg').Pool
require('dotenv').config()

console.log(process.env.DB_CONN_STRING);

const pool = new Pool({
    connectionString: process.env.DB_CONN_STRING,
    ssl: {
      rejectUnauthorized: false
    }
})

module.exports = pool