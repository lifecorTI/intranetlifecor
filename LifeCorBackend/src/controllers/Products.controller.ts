import { Request, Response } from "express";
import { ProductsService } from "../services/Products.Service";

class Products {
  async create(req: Request, res: Response) {
    const productsService = new ProductsService();

    const data = req.body;

    const create = await productsService.create(data);

    return res
      .status(201)
      .json({ message: "product created success!", product: create });
  }

  async getAll(req: Request, res: Response) {
    const productsService = new ProductsService();

    const data = await productsService.getAll();

    res.status(200).json(data);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const productsService = new ProductsService();

    const data = await productsService.findOne(id);

    return res.json(data);
  }

  async update(req: Request, res: Response) {
    const data = req.body;

    const productsService = new ProductsService();

    const update = await productsService.update(data);

    return res.json(update);
  }
}

export { Products };
