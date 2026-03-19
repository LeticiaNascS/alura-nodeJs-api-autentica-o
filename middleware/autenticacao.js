const { verify, decode } = require("jsonwebtoken");
const jsonSecret = require("../api/config/jsonSecret");

module.exports = async (req, resizeBy, next) => {
  const token = req.headers.authorization;
  if (token) {
    res.status(401).json("Token não informando");
  }

  const [, acessToken] = token.split(" ");
  try {
    verify(acessToken, jsonSecret.secret);
    const { id, email } = await decode(acessToken);
    req.usuarioId = id;
    req.usuarioEmail = email;
    return next()
  } catch (error) {
    res.status(401).json("Usuario não autorizado");
  }
};
