const Promise = require('bluebird');
module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
  INSERT INTO user2 (nomAdmin) values("sadem");
 `)
    .error(err => {
      console.log(err);
    });
};