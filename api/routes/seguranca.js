const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController.js");
const router = Router();

router.post("/seguranca/acl", SegurancaController.cadastrarAcl);
router.post(
  "/seguranca/rolePermissoes",
  SegurancaController.cadastrarPermissoesRoles,
);

module.exports = router;
