import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";
import { ICreatePatientWithProcedure } from "../types/patient";
import { dateFormatterPTBRtoJS } from "../utils/dateFormatterPTBRtoJS";

class PatientService {
  async create(patient: ICreatePatientWithProcedure) {
    const nameExists = await prisma.patient.findFirst({
      where: { name: patient.patient.name, cpf: patient.patient.cpf },
    });

    if (nameExists) {
      throw new AppError("Patient already exists", 409);
    }

    const data = await prisma.patient.create({
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
            origin: patient.origin,
          },
        },
      },
    });
    return data;
  }

  async findAll() {
    const data = await prisma.patient.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        Procedures: {
          include: {
            sales: {
              include: {
                productSales: {
                  include: {
                    lot: {
                      include: {
                        product: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return data;
  }

  async findOne(id: string) {
    const data = await prisma.patient.findFirst({
      where: {
        id,
      },
      include: {
        Procedures: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            doctor: true,
          },
        },
        Sales: true,
      },
    });

    return data;
  }
}

export { PatientService };
