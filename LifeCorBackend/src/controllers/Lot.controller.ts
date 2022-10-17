import { Request, Response } from "express";
import { LotService } from "../services/Lot.service";

class Lot {
  async create(req: Request, res: Response) {
    const lotService = new LotService();
    const createLot = req.body;

    const lot = await lotService.create(createLot);

    return res.status(201).json({ message: "created success!", lot: lot });
  }
}

export { Lot };
