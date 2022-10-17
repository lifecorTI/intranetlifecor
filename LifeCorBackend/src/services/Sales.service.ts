import { prismaClient } from "../prisma";

class SalesService {
  async create(userId: string, patientId: string) {
    const data = await prismaClient.sales.create({
      data: {
        userId: userId,
        patientId: patientId,
      },
    });

    return data;
  }
}

export { SalesService };
