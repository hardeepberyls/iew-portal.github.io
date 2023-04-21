const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const db = require("mysql");

db.createPool({
  username: "root",
  host: "localhost",
  password: "",
  database: "reactDb",
});