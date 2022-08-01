var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var Router = require("./Routes");
var items = require("../database-mysql/index.js");


var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + "/../react-client/dist"));
app.use("/", Router.get);
// UNCOMMENT FOR REACT


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// 

app.listen(3000, function() {
  console.log("listening on port 3000!");
});