import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";
import { ILotCreate } from "../types/lot";

class LotService {
  async create(data: ILotCreate) {
    const lotName = data.lot.map((l) => l.name);

    const lotProductExists = await prisma.lot.findMany({
      where: {
        name: {
          in: lotName,
        },
      },
    });
    if (lotProductExists.length > 0) {
      throw new AppError("lote já existe na base de dados");
    }

    const response = await prisma.lot.createMany({
      data: data.lot,
    });

    return response;
  }

  async delete(id: string) {
    await prisma.lot.delete({
      where: {
        id: id,
      },
    });

    return "lot delete success";
  }
}
export { LotService };
