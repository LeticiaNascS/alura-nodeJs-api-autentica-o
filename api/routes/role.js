const { Router } = require("express");

const router = Router();

router.post("/role");
router.get("/role");
router.get("/role/:id");
router.put("/role/:id");
router.delete("/role/:id");

module.exports = router;
