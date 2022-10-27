import { Request, Response } from "express";
import { UserService } from "../services/User.service";

class User {
  async create(req: Request, res: Response) {
    const userService = new UserService();
    const { name, password, isAdmin } = req.body;

    const user = await userService.create({ name, password, isAdmin });

    return res.status(201).json(user);
  }
}

export { User };
