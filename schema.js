const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS bccTable (
  id int NOT NULL AUTO_INCREMENT,
  creationDate timestamp DEFAULT CURRENT TIMESTAMP  ,
  nomTA varchar(50) NOT NULL,
  nomClient varchar(50) NOT NULL,
  nomVoyant varchar(50) NOT NULL,
  telephone varchar(50) NOT NULL,
  ligne int NOT NULL,
  ok varchar(50) NOT NULL,
  typeAppointment varchar(50) NOT NULL,
  commentaire varchar(250) NOT NULL,
  PRIMARY KEY (id)
);
 `)
    .error(err => {
      console.log(err);
    });
};