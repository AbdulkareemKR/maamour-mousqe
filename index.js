//mysql://bbb32223c9ea97:303c0a01@us-cdbr-east-04.cleardb.com/heroku_35584d16ac6b3a9?reconnect=true
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bbb32223c9ea97",
  password: "303c0a01",
  database: "heroku_35584d16ac6b3a9",
});

////////// MUST BE WRITTEN //////////////////////
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
///////////////////////////////////////////////

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("running on port...");
});
