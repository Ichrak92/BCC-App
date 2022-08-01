const express = require("express");
const Router = express.Router();

const Controller = require("./Controllers.js");
module.exports ={
    get:Router.get("/api/bcc", Controller.findAll),
    post:Router.post("/api/bcc", Controller.create),
    post:Router.post("/api/bcc/login", Controller.findUser),
    post:Router.post("api/bcc/Admin", Controller.findAdmin)

}
