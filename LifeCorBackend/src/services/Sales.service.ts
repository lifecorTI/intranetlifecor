import { prisma } from "../prisma";
import { IPropsSales } from "../types/sales";

class SalesService {
  async create(
    userId: string,
    patientId: string,
    procedureId: string,
    Sales: IPropsSales[]
  ) {
    const data = await prisma.sales.create({
      data: {
        userId: userId,
        patientId: patientId,
        proceduresId: procedureId,
        productSales: {
          createMany: {
            data: Sales,
          },
        },
      },
    });

    const lotIds = Sales.map((e) => e.lotId);

    const lots = await prisma.lot.findMany({
      where: {
        id: { in: lotIds },
      },
    });

    lots.map((l) => {
      Sales.map(async (s) => {
        if (l.id === s.lotId) {
          const updateValue = l.qtd - s.qtd;
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

    return data;
  }

  async findMany() {
    const data = await prisma.sales.findMany({
      include: {
        patient: true,
        procedures: true,
        productSales: {
          include: {
            product: true,
            lot: true,
          },
        },
      },
    });

    return data;
  }
}

export { SalesService };
