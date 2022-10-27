import { Request, Response } from "express";
import { LotService } from "../services/Lot.service";

class Lot {
  async create(req: Request, res: Response) {
    const lotService = new LotService();
    const createLot = req.body;

    const lot = await lotService.create(createLot);

    return res.status(201).json({ message: "created success!", lot: lot });
  }

  async delete(req: Request, res: Response) {
    const lotService = new LotService();
    const { id } = req.body;

    const data = await lotService.delete(id);

    return res.status(200).json(data);
  }
}

export { Lot };
