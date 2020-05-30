const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// app.get("/about", (req, res) => {
//   res.send({
//     name: "Shashwat",
//     Age: 25,
//   });
// });

// app.get("/help", (req, res) => {
//   res.send("<h1>Help page of Express.js</h1>");
// });

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Application",
    author: "Shashwat Prakash",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Shashwat Prakash",
    contact: "+91 (7019693809)",
    email: "kumar.prince502@gmail.com",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    contact: "This is help page",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    temprature: "45C",
  });
});

app.listen(2020, () => {
  console.log("Express server started on port 2020...");
});
