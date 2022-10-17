import { PatientService } from "../services/Patient.service";
import { IPatient } from "../types/patient";
import { Request, Response } from "express";

class Patient {
  async create(req: Request, res: Response) {
    const patientService = new PatientService();
    const patient = req.body;

    const data = await patientService.create(patient);

    return res.status(201).json({ message: "patient created", patient: data });
  }

  async findAll(req: Request, res: Response) {
    const patientService = new PatientService();

    const patient = await patientService.findAll();

    return res.status(200).json(patient);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const patientService = new PatientService();
    const data = await patientService.findOne(id);

    return res.status(200).json(data);
  }
}

export { Patient };
