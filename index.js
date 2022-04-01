const express = require("express");
const { url } = require("inspector");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(expressLayouts);

// let lugar = undefined;
let nextId = 5;
let message = "";
let catalogo = [
  {
    id: 1,
    lugar: "lugar aleatorio",
    frase: "frase aleatoria",
    descricao: "lkmsdlkfmsdlkfm",
    localizacao: "dkmlsflkdmfslkm",
    estrutura: "dsmflk",
    outros: "kdlsmfksld",
    imagem: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    lugar: "lugar aleatorio2",
    frase: "frase aleatoria",
    descricao: "lkmsdlkfmsdlkfm",
    localizacao: "dkmlsflkdmfslkm",
    estrutura: "dsmflk",
    outros: "kdlsmfksld",
    imagem: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    lugar: "lugar aleatorio3",
    frase: "frase aleatoria",
    descricao: "lkmsdlkfmsdlkfm",
    localizacao: "dkmlsflkdmfslkm",
    estrutura: "dsmflk",
    outros: "kdlsmfksld",
    imagem: "https://picsum.photos/200/300",
  },
];

app.get("/", (req, res) => {
  res.render("index", catalogo);
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar", catalogo);
});

app.post("/formulario", (req, res) => {
  lugar = req.body;
  lugar.id = nextId;
  nextId++;
  catalogo.push(lugar);
  lugar = undefined;
  message = `Seu cadastro foi efetuado com sucesso!`;
  setTimeout(() => {
    message = "";
  }, 1000);
  res.redirect("/");
});

app.get("/editar", (req, res) => {
  res.render("editar");
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
