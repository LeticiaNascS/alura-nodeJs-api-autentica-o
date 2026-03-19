const RoleService = require("../services/roleService.js");

const roleService = new RoleService();

class RouleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await roleService.cadastrar({ nome, descricao });
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async buscarTodos(req, res) {
    try {
      const roleTodos = await roleService.buscarTodos();
      res.status(200).json(roleTodos);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const roleId = await roleService.buscaPorId(id);
      res.status(200).json(roleId);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async editarRole(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    try {
      const role = await roleService.editarRole({ id, nome, descricao });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async deletarRolePorId(req, res) {
    const { id } = req.params;
    try {
      await roleService.deletarRolePorId(id);
      res.status(200).json("Role deletada com sucesso!");
    } catch (error) {
      res.status(400).json( error.message);
    }
  }
}
module.exports = RouleController;
