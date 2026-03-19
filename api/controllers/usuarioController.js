const UsuarioService = require("../services/usuarioService");

const usuarioService = new UsuarioService();
class UsuarioController {
  static async cadastrar(req, res) {
    const { nome, email, senha } = req.body;
    try {
      const usuario = await usuarioService.cadastrar({ nome, email, senha });

      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async buscarTodosUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.buscarTodosUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async buscarUsuariosPorId(req, res) {
    try {
      const { id } = req.params;

      const usuario = await usuarioService.buscarUsuariosPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async editarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
      const usuario = await usuarioService.editarUsuario({ id, nome, email });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async deletarUsuario(req, res) {
    const { id } = req.params;
    try {
      await usuarioService.deletarUsuario(id);
      res.status(200).json({ message: "Usuario deletado com sucesso!" });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

module.exports = UsuarioController;
