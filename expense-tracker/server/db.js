const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "sam341@",
  host: "localhost",
  port: 5432,
  database: "expense_tracker"
});

module.exports = pool;