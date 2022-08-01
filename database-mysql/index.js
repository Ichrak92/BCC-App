var mysql = require("mysql");
var createTables=require('../schema');
var creatUser=require('../schema2');
var creatUser=require('../schema3');
// var addUser=require('../schemaAdd');
const Promise = require('bluebird');
var connection = mysql.createConnection({
  user: "root",
  password: "root",
});
var database="bcc";
 const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db))
  .then(()=>creatUser(db));
  // .then(()=>AddUser(db));



module.exports = connection; 