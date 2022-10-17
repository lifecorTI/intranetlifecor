import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";
import { ILotCreate } from "../types/lot";
import { dateFormatterPTBRtoJS } from "../utils/dateFormatterPTBRtoJS";

class LotService {
  async create(lot: ILotCreate) {
    const lotProductExists = await prismaClient.lot.findFirst({
      where: {
        productId: lot.productId,
      },
    });

    if (lotProductExists) {
      throw new AppError("productId exists", 409);
    }

    const data = await prismaClient.lot.create({
      data: {
        name: lot.name,
        dueDate: dateFormatterPTBRtoJS(lot.dueDate),
        productId: lot.productId,
        qtd: lot.qtd,
      },
    });

    return data;
  }
}

export { LotService };
