const Pool = require('pg').Pool
require('dotenv').config()

const pool = (() => {
  if (process.env.NODE_ENV !== 'production') {
      return new Pool({
          user: process.env.USER,
          password: process.env.PASSWORD,
          host: process.env.HOST,
          port: process.env.DB_PORT,
          database: process.env.DATABASE,
      });
  } else {
      return new Pool({
          connectionString: process.env.DB_CONN_STRING,
          ssl: {
              rejectUnauthorized: false
            }
      });
  } })();
module.exports = pool