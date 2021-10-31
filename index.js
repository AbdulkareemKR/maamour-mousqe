//mysql://bbb32223c9ea97:303c0a01@us-cdbr-east-04.cleardb.com/heroku_35584d16ac6b3a9?reconnect=true
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const appExpress = express();

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bbb32223c9ea97",
  password: "303c0a01",
  database: "heroku_35584d16ac6b3a9",
});

////////// MUST BE WRITTEN //////////////////////
appExpress.use(cors());
appExpress.use(express.json());
appExpress.use(bodyParser.urlencoded({ extended: true }));
///////////////////////////////////////////////
appExpress.get("/", (req, res) => {
  res.send("<h2>This is maamour backend</h2>");
});

const PORT = process.env.PORT || 3001;
appExpress.listen(PORT, function () {
  console.log("running on port...");
});

//$ git init
//$ heroku git:remote -a maamour-backend

//////////PUSH TO HEROKU////////////////
//$ git add .
//$ git commit -am "make it better"
//$ git push heroku master
