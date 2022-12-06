import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";
import {
  IProductsCreateWithLot,
  IProductUpdateRequest,
} from "../types/products";

class ProductsService {
  async create(product: IProductsCreateWithLot) {
    const productNameExists = await prisma.product.findFirst({
      where: {
        name: product.name,
        length: product.length,
        providerId: product.providerId,
        isCosigned: product.isCosigned,
      },
    });

    if (productNameExists) {
      throw new AppError("product already registered!");
    }

    const data = await prisma.product.create({
      data: {
        name: product.name,
        length: product.length,
        price: product.price,
        pricePt: product.pricePt,
        isCosigned: product.isCosigned,
        categoryId: product.categoryId,
        providerId: product.providerId,
        ref: product.ref,
        lot: {
          createMany: {
            data: product.lot,
          },
        },
      },
    });

    return data;
  }

  async getAll() {
    const data = await prisma.product.findMany({
      include: {
        category: true,
        lot: true,
        provider: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    if (data.length <= 0) {
      throw new AppError("there are no registered products", 404);
    }

    return data;
  }

  async findOne(id: string) {
    const data = await prisma.product.findFirst({
      where: { id },
      include: {
        lot: true,
        provider: true,
        category: true,
      },
    });
    return data;
  }

  async update(data: IProductUpdateRequest) {
    const update = await prisma.product.update({
      where: { id: data.id },
      data: {
        categoryId: data.categoryId,
        isCosigned: data.isCosigned,
        length: data.length,
        name: data.name,
        price: Number(data.price),
        pricePt: Number(data.pricePt),
        providerId: data.providerId,
        lot: {
          updateMany: data.lot.map((l) => {
            return {
              where: {
                id: l.id,
              },
              data: {
                name: l.name,
                qtd: Number(l.qtd),
                dueDate: new Date(l.dueDate),
              },
            };
          }),
        },
      },
    });

    return { message: "atualizado com sucesso", data: update };
  }
}
export { ProductsService };
