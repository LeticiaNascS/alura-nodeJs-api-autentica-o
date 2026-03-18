const bodyParser = require("body-parser");

const produto = require("./produtoRoute.js");
const usuarios = require("./usuariosRoute.js");
const login = require("../routes/authRoutes.js");
module.exports = (app) => {
  app.use(bodyParser.json(), produto, usuarios, login);
};
