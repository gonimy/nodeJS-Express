const express = require("express");
const path = require("path");

const root = require("../path");
const shopRoutes = express();

shopRoutes.get("/", (req, res, next) => {
  res.sendFile(path.join(root, "views", "shop.html"));
});

module.exports = shopRoutes;
