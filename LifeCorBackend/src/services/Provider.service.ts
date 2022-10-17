import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";
import { IProviderCreate } from "../types/provider";

class ProviderService {
  async create({ name, email, phone }: IProviderCreate) {
    const providerExists = await prismaClient.provider.findFirst({
      where: {
        name,
      },
    });

    if (providerExists) {
      throw new AppError("Provider already exists", 409);
    }

    const data = await prismaClient.provider.create({
      data: {
        name: name,
        email: email,
        phone: phone,
      },
    });

    return data;
  }

  async findMany() {
    const res = await prismaClient.provider.findMany();

    return res;
  }
}

export { ProviderService };
