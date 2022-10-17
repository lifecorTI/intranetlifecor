import { Request, Response } from "express";
import { AuthService } from "../services/AuthService.service";
class Session {
  async authSession(req: Request, res: Response) {
    const authService = new AuthService();
    const { name, password } = req.body;

    const { token, userData } = await authService.execute({ name, password });

    return res.status(200).json({ token: token, user: userData });
  }
}

export { Session };
