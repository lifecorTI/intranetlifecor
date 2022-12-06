import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";

class DoctorService {
  async create(name: string, specialization: string, location: string) {
    const doctorExists = await prisma.doctor.findFirst({
      where: {
        name,
      },
    });

    if (doctorExists) {
      throw new AppError("Doctor already exists", 409);
    }

    const data = await prisma.doctor.create({
      data: {
        name: name,
        specialization: specialization,
        location: location,
      },
    });

    return data;
  }

  async findMany() {
    const doctors = await prisma.doctor.findMany();
    return doctors;
  }
}

export { DoctorService };
