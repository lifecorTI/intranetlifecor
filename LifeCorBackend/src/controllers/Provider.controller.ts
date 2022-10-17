import { Request, Response } from "express";
import { ProviderService } from "../services/Provider.service";
ProviderService;
class Provider {
  async create(req: Request, res: Response) {
    const providerService = new ProviderService();
    const { name, email, phone } = req.body;

    const data = await providerService.create({ name, email, phone });

    return res
      .status(201)
      .json({ message: "provider as created!", provider: data });
  }

  async findMany(req: Request, res: Response) {
    const providerService = new ProviderService();

    const data = await providerService.findMany();

    return res.status(200).json(data);
  }
}

export { Provider };
