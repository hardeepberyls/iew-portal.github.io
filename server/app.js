const express = require("express");
const body = require("body-parser");
const app = express();
const core = require("cors");
app.use(core());
app.set("view engine", "ejs");
const db = require("./config/database");
app.use(express.static("public"));
const routes = require("./routes/routes");

app.use(body.urlencoded({ extended: true }));
app.use(body.json());
app.use("/", routes);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
