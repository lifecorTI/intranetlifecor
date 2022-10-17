import { prismaClient } from "../prisma";
import { ICreateUser } from "../types/user";
import bcryptjs from "bcryptjs";
import { AppError } from "../errors/AppError";

class UserService {
  async createService({ name, password, isAdmin = false }: ICreateUser) {
    const user = {
      name: name,
      password: await bcryptjs.hash(password, 10),
      isAdmin: isAdmin || false,
    };

    const userExists = await prismaClient.user.findFirst({
      where: {
        name,
      },
    });

    if (userExists) {
      throw new AppError("User already exists", 404);
    }

    const userData = await prismaClient.user.create({ data: user });

    return `user created ${userData.name}`;
  }
}

export { UserService };
