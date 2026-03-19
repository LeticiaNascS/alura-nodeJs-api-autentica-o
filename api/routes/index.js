const bodyParser = require("body-parser");

const produto = require("./produtoRoute.js");
const usuarios = require("./usuariosRoute.js");
const login = require("../routes/authRoutes.js");
const role = require("../routes/role.js");
const permissao = require("../routes/permissao.js");
module.exports = (app) => {
  app.use(bodyParser.json(), login, produto, usuarios, role, permissao);
};
