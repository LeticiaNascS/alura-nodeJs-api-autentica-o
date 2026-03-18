const AuthService = require("../services/authServices.js");

const authService = new AuthService();

class AuthController {
  static async login(req, res) {
    const { email, senha } = req.body;

    try {
      const login = await authService.login({ email, senha });

      res.status(200).send(login);
    } catch (error) {
      res.status(401).send(error.message);
    }
  }
}

module.exports = AuthController;
