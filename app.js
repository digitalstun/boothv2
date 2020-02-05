/// Dependencies ///
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

/// Middleware ///
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/// Routes /// index page ///
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/index.html"));
});
// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/about.html"));
});
// contact route
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/contact.html"));
});
// catch 404 and forward error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "/404.html"));
});

/// Server ///
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(` The server has started on port ${port}`);
});
