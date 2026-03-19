const RoleService = require("../services/roleService.js");

const roleService = RoleService();

class RouleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
        const role = roleService.cadastrar({nome,descricao})
        res.status(201).json(role)

    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
module.exports = RouleController;
