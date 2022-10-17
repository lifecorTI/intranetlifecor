import { Request, Response } from "express";
import { DoctorService } from "../services/Doctor.Service";

class Doctor {
  async create(req: Request, res: Response) {
    const doctorService = new DoctorService();
    const { name, specialization, location } = req.body;

    const data = await doctorService.create(name, specialization, location);

    return res.status(201).json({
      message: "doctor created",
      doctor: data,
    });
  }

  async findMany(req: Request, res: Response) {
    const doctorService = new DoctorService();
    const doctor = await doctorService.findMany();

    return res.status(200).json(doctor);
  }
}

export { Doctor };
