import { Request, Response } from "express";
import { ProceduresService } from "../services/Procedures.service";

class Procedures {
  async create(req: Request, res: Response) {
    const proceduresService = new ProceduresService();
    const { name, patientId, doctorId, userId, origin } = req.body;

    const data = await proceduresService.create(
      name,
      doctorId,
      patientId,
      userId,
      origin
    );

    return res
      .status(201)
      .json({ message: "created procedure", procedure: data });
  }

  async getAll(req: Request, res: Response) {
    const proceduresService = new ProceduresService();

    const data = await proceduresService.getAll();

    return res.status(200).json(data);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const proceduresService = new ProceduresService();

    const data = await proceduresService.findOne(id);

    return res.status(200).json(data);
  }
}

export { Procedures };
