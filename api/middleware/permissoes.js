const dataBase = require("../models");

const permissoes = (listaDePermissoes) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    const usuario = await dataBase.usuarios.findOne({
      include: [
        {
          model: dataBase.permissoes,
          as: "usuario_permissoes",
          attributes: ["id", "nome"],
        },
      ],
      where: {
        id: usuarioId,
      },
    });
    if (!usuario) {
      return res.status(401).json("Usuario nao cadastrado");
    }
    const permissoesCadastradas = usuario.usuario_permissoes
      .map((permissao) => permissao.nome)
      .some((permissao) => listaDePermissoes.includes(permissao));

    if (!permissoesCadastradas) {
      return res.status(401).json("Usuario nao possui acesso");
    }
    return next();
  };
};

module.exports = permissoes;
