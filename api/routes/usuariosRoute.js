const { Router } = require("express");
const UsuariosController = require("../controllers/usuarioController.js");
const autenticado = require("../middleware/autenticacao.js");
const router = Router();
router.use(autenticado)

router.post("/usuarios", UsuariosController.cadastrar);
router.get("/usuarios", UsuariosController.buscarTodosUsuarios);
router.get("/usuario/:id", UsuariosController.buscarUsuariosPorId);
router.put("/usuario/:id", UsuariosController.editarUsuario);
router.delete("/usuarios/:id", UsuariosController.deletarUsuario);

module.exports = router;
