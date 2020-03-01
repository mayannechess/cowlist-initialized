const mysql = require("mysql");
const Promise = require("bluebird");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "MCHR",
  password: "database",
  database: "cows"
});

connection.connect((err) => {
  if (err) {
      throw err;
  }
  console.log("mySQL connection successful");
});

module.exports.connection = connection;
module.exports.queryAsync = Promise.promisify(connection.query).bind(connection);