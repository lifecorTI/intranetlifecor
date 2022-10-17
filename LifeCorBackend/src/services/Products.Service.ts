import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";
import { IProductsCreateWithLot } from "../types/products";

class ProductsService {
  async create(product: IProductsCreateWithLot) {
    const productNameExists = await prismaClient.product.findFirst({
      where: {
        name: product.name,
        length: product.length,
        providerId: product.providerId,
      },
    });

    if (productNameExists) {
      throw new AppError("product already registered!");
    }

    const data = await prismaClient.product.create({
      data: {
        name: product.name,
        length: product.length,
        price: product.price,
        pricePt: product.pricePt,
        isCosigned: product.isConsigned,
        categoryId: product.categoryId,
        providerId: product.providerId,
        Lot: {
          create: {
            name: product.lot.name,
            dueDate: product.lot.dueDate,
            qtd: product.lot.qtd,
          },
        },
      },
    });

    return data;
  }

  async getAll() {
    const data = await prismaClient.product.findMany({
      include: {
        Lot: true,
        Provider: true,
      },
    });

    if (!data) {
      throw new AppError("there are no registered products", 404);
    }

    return data;
  }
}

export { ProductsService };
