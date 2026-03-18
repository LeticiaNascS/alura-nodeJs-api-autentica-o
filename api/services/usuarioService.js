const dataBase = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");
class UsuarioService {
  async cadastrar(dto) {
    const usuario = await dataBase.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });

    if (usuario) {
      throw new Error("Usuário já cadastrado");
    }

    try {
      const senhaHash = await hash(dto.senha, 8);
      const novoUsuario = await dataBase.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      });
      return novoUsuario;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
  async buscarTodosUsuarios() {
    const usuarios = await dataBase.usuarios.findAll();
    return usuarios;
  }

  async buscarUsuariosPorId(id) {
    const usuario = await dataBase.usuarios.findByPk(id);
    return usuario;
  }

  async editarUsuario(dto) {
    const usuario = await this.buscarUsuariosPorId(dto.id);
    try {
      usuario.nome = dto.nome;
      usuario.email = dto.email;
      await usuario.save();
      return usuario;
    } catch (error) {
      throw new Error("Erro ao editar usuario!");
    }
  }

  async deletarUsuario(id) {
    await this.buscarUsuariosPorId(id);
    try {
      await dataBase.usuarios.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Erro ao tentar deletar o usuario!");
    }
  }
}

module.exports = UsuarioService;
