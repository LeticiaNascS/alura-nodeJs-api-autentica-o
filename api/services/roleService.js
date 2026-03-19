const dataBase = require("../models");
const uuid = require("uuid");
class RoleService {
  async cadastrar(dto) {
    const role = await dataBase.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });
    if (role) {
      throw new Error("Role já cadastrada");
    }
    try {
      const newRole = await dataBase.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newRole;
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  async buscarTodos() {
    const role = await dataBase.roles.findAll();
    return role;
  }
  async buscaPorId(id) {
    const role = await dataBase.roles.findByPk(id);
    return role;
  }
  async editarRole(dto) {
    const role = await dataBase.roles.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!role) {
      throw new Error("Role informada não cadastrada!");
    }
    try {
      ((role.nome = dto.nome), (role.descricao = dto.descricao));
      await role.save();
      return await role.reload();
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  async deletarRolePorId(id) {
    const role = await dataBase.roles.findOne({
      where: {
        id: id,
      },
    });
    if (!role) {
      throw new Error("Role informada não cadastrada!");
    }
    try {
      await dataBase.roles.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
module.exports = RoleService;
