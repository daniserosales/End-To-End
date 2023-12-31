require("dotenv").config();
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync("./server/db/countries.sql").toString();

// Send the SQL to the db
db.query(sql)
    .then(data => console.log("Set up complete"))
    .catch(error => console.log(error))