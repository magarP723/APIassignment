const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "prabesh",
  database: "bookstore",
});

// This function creates a table if it does not exists or at the start of the script..
function createTable() {
  return new Promise((resolve, reject) => {
    connection.query(
      `create table if not exists bookrecord(BID int auto_increment primary key,Name varchar(50) not null, ISBN varchar(15) not null unique)`,
      (err, result) => {
        if (!err) {
          resolve({ status: "success" });
        } else {
          reject(err);
        }
      }
    );
  });
}

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to mysql server");
  try {
    createTable();
  } catch (err) {
    console.log(err);
  }
});

module.exports = connection;
