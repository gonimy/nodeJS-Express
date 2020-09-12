const express = require("express");
const path = require("path");

const root = require("../path");
const adminRoutes = express();

adminRoutes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(root, "views", "add-product.html"));
});
adminRoutes.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/")
});

module.exports = adminRoutes;
