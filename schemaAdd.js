const Promise = require('bluebird');
module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
  INSERT INTO users (nomTA) values("ichrak");
 `)
    .error(err => {
      console.log(err);
    });
};