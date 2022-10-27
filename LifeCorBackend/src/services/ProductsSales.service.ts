import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";
import { IProductsSales, IProductsData } from "../types/productSales";

class ProductSalesService {
  async create(data: IProductsData) {
    const ids = data.map((p: IProductsSales) => p.productId);
    const lot = await prisma.lot.findMany({
      where: {
        productId: { in: ids },
      },
      include: {
        product: true,
      },
    });
    const productsHaveLot = ids.map((id) =>
      lot.find((p) => p.productId === id)
    );
    if (productsHaveLot.includes(undefined)) {
      throw new AppError("Product no have a lot", 404);
    }
    data.map((d, i) => {
      if (!(d.qtd <= lot[i].qtd)) {
        throw new AppError(
          `the product ${lot[i]} ${lot[i].name} does not have enough quantity`
        );
      }
    });
    lot.map(async (l) => {
      data.map(async (d) => {
        if (l.productId === d.productId) {
          const updateValue = l.qtd - d.qtd;
          await prisma.lot.update({
            where: {
              id: l.id,
            },
            data: {
              qtd: updateValue,
              updatedAt: new Date(),
            },
          });
        }
      });
    });

    const productSales = await prisma.productSales.createMany({
      data: data,
    });
    return productSales;
  }

  async findMany() {
    const data = await prisma.productSales.findMany({
      include: {
        product: true,
        lot: true,
        sales: {
          include: {
            patient: true,
          },
        },
      },
    });
    return data;
  }
}

export { ProductSalesService };
