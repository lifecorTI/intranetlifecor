import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../prisma";
import { ISessionUser } from "../types/user";

class AuthService {
  async execute({ name, password }: ISessionUser) {
    const user = await prisma.user.findFirst({
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
        expiresIn: "1312312893123d",
      }
    );

    const userData = {
      name: user.name,
      createdAt: user.createdAt,
      id: user.id,
    };

    return { token, userData };
  }
}

export { AuthService };
