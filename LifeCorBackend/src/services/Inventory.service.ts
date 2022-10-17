import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";

class InventoryService {
  async create(lotId: string, qtd: number) {
    const idExists = await prismaClient.inventory.findFirst({
      where: {
        id: lotId,
      },
    });

    if (idExists) {
      throw new AppError("product already exists", 409);
    }

    const data = await prismaClient.inventory.create({
      data: {
        lotId: lotId,
        qtd: qtd,
      },
    });

    return data;
  }
}

export { InventoryService };
