import { Op } from "sequelize";
import database from "../src/models";
class UserService {

  static async signin(login) {
    try {
      return await database.User.findOne({
        where: {
          [Op.or]: [{ email: login }, { cpf: login }, { cellphone: login }],
        },
        raw: true,
      });
    } catch (error) {
      throw error;
    }
  }

  static async signup(user) {
    try {
      return await database.User.create(user);
    } catch (error) {
      throw error;
    }
  }

}

export default UserService;