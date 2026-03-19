const { Router } = require("express");
const PermissaoController = require('../controllers/permissaoController.js')
const router = Router();


router.post("/permissao", PermissaoController.cadastrar)


module.exports = router;