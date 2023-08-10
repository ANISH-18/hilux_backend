require("dotenv").config();

var mysql = require("mysql");

class Database {
  constructor() {
    this.con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  }

  query = (sql, args) => {
    return new Promise((resolve, reject) => {
      this.con.query(sql, args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

module.exports = Database;
