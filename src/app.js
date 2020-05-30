const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsTemplatePath = path.join(__dirname, "../templates/views");
const partialsTemplatePath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsTemplatePath);
hbs.registerPartials(partialsTemplatePath);

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
    name: "Shashwat Prakash",
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
    name: "Shashwat Prakash",
    contact: "This is help page of this application",
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
