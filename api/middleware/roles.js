const dataBase = require("../models");

const roles = (listaRoles) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    const usuario = await dataBase.usuarios.findOne({
      include: [
        {
          model: dataBase.roles,
          as: "usuario_roles",
          attributes: ["id", "nome"],
        },
      ],
      where: {
        id: usuarioId,
      },
    });
    if (!usuario) {
      return res.status(401).json("Uusario nao cadastrado");
    }
    const rolesCadastradas = usuario.usuario_roles
      .map((role) => role.nome)
      .some((role) => listaRoles.includes(role));

    if (!rolesCadastradas) {
      return res.status(401).json("Usuario nao permitido");
    }
    return next();
  };
};

module.exports = roles;
