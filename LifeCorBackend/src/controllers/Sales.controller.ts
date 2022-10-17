import { Request, Response } from "express";
import { SalesService } from "../services/Sales.service";

class Sales {
  async create(req: Request, res: Response) {
    const salesService = new SalesService();
    const { userId, patientId } = req.body;

    const data = await salesService.create(userId, patientId);

    return res.status(201).json({ message: "sales created", sales: data });
  }
}

export { Sales };
