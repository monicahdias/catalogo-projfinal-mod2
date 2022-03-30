const express = require("express");
const { url } = require("inspector");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const port = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar");
});

app.get("/form-edit", (req, res) => {
  res.render("form-edit");
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes");
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
