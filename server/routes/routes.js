const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sale", (req, res) => {
  res.render("sale");
});
router.get("/main", (req, res) => {
  res.render("../controller/main");
});
module.exports = router;
