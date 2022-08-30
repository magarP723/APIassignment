const dbConnection = require("../db/connection");
//This function gets all the Books info
const getAll = () => {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM bookrecord`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};
//This function selects a particular book from name
const getBookData = (name) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM bookrecord WHERE Name="${name}"`,
      (err, result) => {
        if (!err) {
          if (result.length == 0) {
            resolve({ status: "no data found" });
          }
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};
//this functions adds book into the record
const addBookData = (data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `INSERT INTO bookrecord(Name,ISBN) VALUES ("${data.Name}","${data.ISBN}")`,
      (err, result) => {
        if (!err) {
          resolve({ status: "success", info: result });
        } else {
          reject(err);
        }
      }
    );
  });
};
//this function updates the record
const updateData = (id, data) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `UPDATE bookrecord SET ISBN="${data.ISBN}" WHERE Name="${id}"`,
      (err, result) => {
        if (!err) {
          resolve({ status: "update successful", info: result });
        } else {
          reject(err);
        }
      }
    );
  });
};
//this functions deletes the record
const deleteData = (name) => {
  return new Promise((resolve, reject) => {
    dbConnection.query(
      `DELETE FROM bookrecord WHERE Name="${name}"`,
      (err, result) => {
        if (!err) {
          resolve({ status: "Success", info: result });
        } else {
          reject(err);
        }
      }
    );
  });
};
module.exports = { getBookData, addBookData, updateData, deleteData, getAll };
