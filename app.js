const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const root = require("./path");
const app = express();

const admin = require("./routes/add-product");
const shop = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/admin", admin);
app.use(shop);

app.use((req, res, next) => {
  res.sendFile(path.join(root, "views", "404.html"));
});

app.listen(3000);
