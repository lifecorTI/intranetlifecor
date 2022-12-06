import { request, Request, Response } from "express";
import { NfeService } from "../services/Nfe.service";

class NfeController {
  async create(req: Request, res: Response) {
    const nfeService = new NfeService();
    const { userId } = req.body;
    const requestFile = req.file as Express.Multer.File;

    const response = await nfeService.create(userId, requestFile);

    return res.status(201).json({ message: response });
  }
  async findMany(req: Request, res: Response) {
    const nfeService = new NfeService();
    const data = await nfeService.findMany();

    return res.send(data);
  }
}

export { NfeController };
