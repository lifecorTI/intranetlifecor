import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";

class CategoryService {
  async create(name: string) {
    const categoryExists = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryExists) {
      throw new AppError("category already exists", 409);
    }

    const data = await prisma.category.create({
      data: {
        name: name,
      },
    });

    return data;
  }

  async findMany() {
    const categories = await prisma.category.findMany();

    return categories;
  }
}

export { CategoryService };
