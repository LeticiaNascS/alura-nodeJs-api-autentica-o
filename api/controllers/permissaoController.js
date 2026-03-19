const PermissaoService = require("../services/permissaoService.js");
const permissaoService = new PermissaoService();

class PermissaoController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;
    try {
      const permissao = await permissaoService.cadastrar({ nome, descricao });
      res.status(200).json(permissao);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async buscarTodos(req, res) {
    try {
      const permissoes = await permissaoService.buscarTodos();
      res.status(200).json(permissoes);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const permissoes = await permissaoService.buscarPorId(id);
      res.status(200).json(permissoes);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async editar(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const role = await permissaoService.editar({ id, nome, descricao });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async deletar(req,res){
    const {id} = req.params
    try{
        await permissaoService.deletar(id)
        res.status(200).json("Permissao deletada com sucesso")
    }catch(error){
        res.status(400).json(error.message)
    }
  }
}
module.exports = PermissaoController;
