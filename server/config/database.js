const mysql = require("mysql");

const con = mysql.createPool({
  user: "root",
  password: "",
  database: "ishwar",
  host: "localhost",
});
con.getConnection(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});
