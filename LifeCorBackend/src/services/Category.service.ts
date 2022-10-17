import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";

class CategoryService {
  async create(name: string) {
    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryExists) {
      throw new AppError("category already exists", 409);
    }

    const data = await prismaClient.category.create({
      data: {
        name: name,
      },
    });

    return data;
  }

  async findMany() {
    const categories = await prismaClient.category.findMany();

    return categories;
  }
}

export { CategoryService };
