const Pool = require('pg').Pool
require('dotenv').config()

const pool = (() => {
  if (process.env.NODE_ENV !== 'production') {
      return new Pool({
          user: "postgres",
          password: "123",
          host: "localhost",
          port: 5432,
          database: "node_react_openlayers"
      });
  } else {
      return new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: {
              rejectUnauthorized: false
            }
      });
  } })();
module.exports = pool