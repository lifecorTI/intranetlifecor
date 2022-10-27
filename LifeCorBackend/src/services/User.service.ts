import { prisma } from "../prisma";
import { ICreateUser } from "../types/user";
import bcryptjs, { hash } from "bcryptjs";
import { AppError } from "../errors/AppError";

class UserService {
  async create({ name, password, isAdmin = false }: ICreateUser) {
    const userExists = await prisma.user.findFirst({
      where: {
        name,
      },
    });

    if (userExists) {
      throw new AppError("User already exists", 409);
    }

    const userData = await prisma.user.create({
      data: {
        name: name,
        password: await hash(password, 10),
        isAdmin: isAdmin,
      },
    });

    const useRes = (userData: any) => {
      const { password, isAdmin, ...rest } = userData;
      return rest;
    };
    return useRes(userData);
  }
}

export { UserService };
