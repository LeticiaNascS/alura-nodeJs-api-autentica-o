const { Router } = require("express");
const RoleController = require("../controllers/roleController.js");
const router = Router();

router.post("/role", RoleController.cadastrar);
router.get("/role", RoleController.buscarTodos);
router.get("/role/:id", RoleController.buscarPorId);
router.put("/role/:id", RoleController.editarRole);
router.delete("/role/:id", RoleController.deletarRolePorId);

module.exports = router;
