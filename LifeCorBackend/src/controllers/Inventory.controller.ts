import { Request, Response } from "express";
import { InventoryService } from "../services/Inventory.service";

class Inventory {
  async create(req: Request, res: Response) {
    const inventoryService = new InventoryService();
    const { product_id, qtd } = req.body;

    const data = await inventoryService.create(product_id, qtd);

    return res
      .status(201)
      .json({ message: "inventory created", inventory: data });
  }
}

export { Inventory };
