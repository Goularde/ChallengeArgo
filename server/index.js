const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "argodatabase",
});

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const nomArgonaute = req.body.nomArgonaute;
  console.log(nomArgonaute);

  const sqlInsert = "INSERT INTO argonaute (nomArgonaute) VALUES (?)";
  db.query(sqlInsert, [nomArgonaute], (err, result) => {});
  console.log(err);
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
