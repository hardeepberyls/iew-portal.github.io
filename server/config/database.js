const mysql = require("mysql");

const con = mysql.createPool({
  user: "root",
  password: "",
  database: "portaldb",
  host: "localhost",
});
con.getConnection(function (err, result) {
  if (err) throw err;
  result.query("select * from sales",function(error,data) {
    if(error) throw error;
    console.log("table data is" ,data);
  })
});
