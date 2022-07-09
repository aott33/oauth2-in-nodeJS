require('dotenv').config();

const Pool = require("pg").Pool;
function query(queryString, cbFunc) {
  const pool = new Pool({
    user: process.env.PG_USERNAME,
    host: "localhost",
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  pool.query(queryString, (error, results) => {
    cbFunc(setResponse(error, results));
  });
}
function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
}
module.exports = {
  query,
};