const express = require("express");
const { url } = require("inspector");
const path = require("path");

const app = express();

const port = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index") 
})

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar") 
})

app.get("/editar", (req, res) => {
  res.render("editar") 
})

app.get("/detalhes", (req, res) => {
  res.render("detalhes") 
})

app.get("/sobre", (req, res) => {
  res.render("sobre") 
})

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
);