import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma/index";
import { IProductsSales, IProductsData } from "../types/productSales";

class ProductSalesService {
  async create(data: IProductsData) {
    const arrayData = data;

    const ids = arrayData.map((p: IProductsSales) => p.productId);
    const lot = await prismaClient.lot.findMany({
      where: {
        productId: { in: ids },
      },
      include: {
        Product: true,
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
          `the product ${lot[i].Product.name} ${lot[i].Product.length} does not have enough quantity`
        );
      }
    });

    lot.map(async (l) => {
      data.map(async (d) => {
        if (l.productId === d.productId) {
          const updateValue = l.qtd - d.qtd;

          await prismaClient.lot.update({
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

    const productSales = await prismaClient.productSales.createMany({
      data: data,
    });
    return productSales;
  }
}

export { ProductSalesService };
