const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const dbase= require("../config/database")

dbase.query("insert into sale where ")
