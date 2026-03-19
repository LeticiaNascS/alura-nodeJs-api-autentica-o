const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require("../middleware/roles.js")
const autenticado = require('../middleware/autenticacao.js')

const router = Router()

router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto', autenticado, roles(["Vendedor", "Gerente"]), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)

module.exports = router