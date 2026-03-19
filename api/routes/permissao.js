const { Router } = require("express");
const PermissaoController = require('../controllers/permissaoController.js')
const router = Router();


router.post("/permissao", PermissaoController.cadastrar)
router.get("/permissao", PermissaoController.buscarTodos)
router.get("/permissao/:id", PermissaoController.buscarPorId)
router.put("/permissao", PermissaoController.editar)
router.delete("/permissao/:id", PermissaoController.deletar)



module.exports = router;