import { CategoryService } from "../services/Category.service";
import { Request, Response } from "express";

class Category {
  async create(req: Request, res: Response) {
    const categoryService = new CategoryService();
    const { name } = req.body;

    const data = await categoryService.create(name);

    return res
      .status(201)
      .json({ message: "category created", category: data });
  }

  async findMany(req: Request, res: Response) {
    const categoryService = new CategoryService();

    const data = await categoryService.findMany();

    return res.json(data);
  }
}

export { Category };
