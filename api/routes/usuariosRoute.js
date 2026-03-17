const { Router } = require("express");

const router = Router();

router.post("/usuarios");
router.get("/usuarios");
router.get("usuarios/id/:id");
router.put("/usuario/id/:id");
router.delete("/usuarios/id/:id");

module.exports = router;
