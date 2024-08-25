const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

//constants
const app = express();
const PORT = process.env.PORT;

// db connections
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongo connect");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.send("server is fucking..");
});

app.get("/register", (req, res) => {
  return res.render("registerPage");
});
app.get("/login", (req, res) => {
  return res.render("loginPage");
});

app.listen(PORT, () => {
  console.log("server is running at:");
  console.log(`http://localhost:${PORT}/`);
});
