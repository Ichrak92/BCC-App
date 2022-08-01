const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
 CREATE TABLE IF NOT EXISTS user2(id int NOT NULL AUTO_INCREMENT,
 nom varchar(50) NOT NULL,
 PRIMARY KEY (ID));`)
    .error(err => {
      console.log(err);
    });
};