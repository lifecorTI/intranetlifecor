import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../prisma";
import { ISessionUser } from "../types/user";

class AuthService {
  async execute({ name, password }: ISessionUser) {
    const user = await prismaClient.user.findFirst({
      where: {
        name,
      },
    });

    if (!user) {
      throw new Error("name or password incorrect!");
    }

    const match = await compare(password, user.password);

    if (!match) {
      throw new Error("name or password incorrect!");
    }

    const token = sign(
      { name: user.name, id: user.id },
      process.env.SECRET_KEY!,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    const userData = {
      name: user.name,
      isAdmin: user.isAdmin,
      id: user.id,
    };

    return { token, userData };
  }
}

export { AuthService };
