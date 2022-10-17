import { AppError } from "../errors/AppError";
import { prismaClient } from "../prisma";
import { ICreatePatientWithProcedure } from "../types/patient";
import { dateFormatterPTBRtoJS } from "../utils/dateFormatterPTBRtoJS";

class PatientService {
  async create(patient: ICreatePatientWithProcedure) {
    const nameExists = await prismaClient.patient.findFirst({
      where: { cpf: patient.patient.cpf },
    });

    if (nameExists) {
      throw new AppError("Patient already exists", 409);
    }

    const data = await prismaClient.patient.create({
      data: {
        name: patient.patient.name,
        birthDate: dateFormatterPTBRtoJS(patient.patient.birthDate),
        phone: patient.patient.phone,
        sex: patient.patient.sex,
        cpf: patient.patient.cpf,
        rg: patient.patient.rg,
        address: patient.patient.address,
        houseNumber: patient.patient.houseNumber,
        district: patient.patient.district,
        agreement: patient.patient.agreement,
        city: patient.patient.city,
        municipality: patient.patient.municipality,
        userId: patient.patient.userId,
        motherName: patient.patient.motherName,
        Procedures: {
          create: {
            name: patient.name,
            doctorId: patient.doctorId,
            userId: patient.patient.userId,
          },
        },
      },
    });
    return data;
  }

  async findAll() {
    const data = await prismaClient.patient.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  }

  async findOne(id: string) {
    const data = await prismaClient.patient.findFirst({
      where: {
        id,
      },
      include: {
        Procedures: {
          include: {
            Doctor: true,
          },
        },
        Sales: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  }
}

export { PatientService };
