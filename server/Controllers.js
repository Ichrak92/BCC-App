var connection = require("../database-mysql/index.js");
const bodyParser = require("body-parser");
const mysql = require("mysql");
module.exports = {
  findAll: (req, res) => {
    console.log("I am in controller");
    var syntax = `SELECT * FROM bccTable`;
    connection.query(syntax, function(err, data) {
      if (err) console.log(err, "errror");
      res.send(JSON.stringify(data));
    });
  },
  
  findUser: (req, res) => {
    console.log("I am in controller");
    var syntax = 'SELECT * FROM users where nom =? ';
    var values=[req.body.nom];
    connection.query(syntax, values,function(err, data) {
      if (err) console.log(err, "errror");
      res.send(JSON.stringify(data));
    });
  },
  findAdmin: (req, res) => {
    console.log("I am in controller");
    var syntax = 'SELECT * FROM user2 where nom1 =? ';
    var values=[req.body.nom1];
    connection.query(syntax, values,function(err, data) {
      if (err) console.log(err, "errror");
      res.send(JSON.stringify(data));
    });
  },

  create: (req, res) => {
    var syntax = `INSERT INTO bccTable(creationDate,nomTA,nomClient,telephone,nomVoyant,ligne,ok,commentaire,typeAppointment ) VALUES(?,?,?,?,?,?,?,?,?)`;
    console.log("**********************", req.body);
    // var ligne=parseInt (req.body.ligne);
    var values = [
      req.body.dateCreation,
      req.body.nomTA,
      req.body.nomClient,
      req.body.telephone,
      req.body.nomVoyant,
      req.body.ligne,
      req.body.ok,
      req.body.commentaire,
      req.body.typeAppointment,
      req.body.qualification
    ];
    connection.query(syntax, values, function(err, data) {
      if (err) console.log(err);
      res.send(data);
      console.log(data);
    });
  },

};
