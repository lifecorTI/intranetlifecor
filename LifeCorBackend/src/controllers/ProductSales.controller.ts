import { Request, Response } from "express";
import { ProductSalesService } from "../services/ProductsSales.service";

class ProductSales {
  async create(req: Request, res: Response) {
    const productSalesService = new ProductSalesService();
    const data = req.body;

    const productSales = await productSalesService.create(data);

    return res.status(201).json({ message: "successful sale", productSales });
  }

  async findMany(req: Request, res: Response) {
    const productSalesService = new ProductSalesService();

    const data = await productSalesService.findMany();

    return res.json(data);
  }
}

export { ProductSales };
