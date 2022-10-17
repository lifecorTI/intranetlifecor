import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";

class DoctorService {
  async create(name: string, specialization: string, location: string) {
    const doctorExists = await prismaClient.doctor.findFirst({
      where: {
        name,
      },
    });

    if (doctorExists) {
      throw new AppError("Doctor already exists", 409);
    }

    const data = await prismaClient.doctor.create({
      data: {
        name: name,
        specialization: specialization,
        location: location,
      },
    });

    return data;
  }

  async findMany() {
    const doctors = await prismaClient.doctor.findMany();

    return doctors;
  }
}

export { DoctorService };
