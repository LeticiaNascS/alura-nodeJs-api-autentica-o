const dataBase = require("../models");
const uuid = require("uuid");
class RoleService {
  async cadastrar(dto) {
    const role = dataBase.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });
    if (role) {
      throw new Error("Role já cadastrada");
    }
    try {
      const newRole = dataBase.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newRole;
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
module.exports = RoleService;
