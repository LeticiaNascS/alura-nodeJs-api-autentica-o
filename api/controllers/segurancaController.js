const SegurancaService = require("../services/segurancaService.js");

const segurancaService = new SegurancaService();

class SegurancaController {
    static async cadastrarAcl(req, res) {
    const { roles, permissoes } = req.body
    const { usuarioId } = req

    try {
      const acl = await segurancaService.cadastrarAcl({ roles, permissoes, usuarioId })
      res.status(201).json(acl)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
  static async cadastrarPermissoesRoles(req,res){
    const {roleId, permissoes} = req.body

    try{
        const rolePermissoes = await segurancaService.cadastrarPermissoesRole({roleId, permissoes})
        res.status(200).json(rolePermissoes)
    }catch(error){
        res.status(400).json(error.message)
    }
  }
}

module.exports = SegurancaController;
