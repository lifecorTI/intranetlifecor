import { Request, Response } from "express";
import { SalesService } from "../services/Sales.service";

class Sales {
  async create(req: Request, res: Response) {
    const salesService = new SalesService();
    const { userId, patientId, proceduresId, productSales } = req.body;

    const data = await salesService.create(
      userId,
      patientId,
      proceduresId,
      productSales
    );

    return res.status(201).json({ message: "sales created", sales: data });
  }

  async findMany(req: Request, res: Response) {
    const salesService = new SalesService();

    const data = await salesService.findMany();

    return res.status(200).json(data);
  }
}

export { Sales };
