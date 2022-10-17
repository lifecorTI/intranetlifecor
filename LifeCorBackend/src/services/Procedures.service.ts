import { prismaClient } from "../prisma";
import dateFormatter from "../utils/dateFormatterJStoPTBR";

class ProceduresService {
  async create(
    name: string,
    doctorId: string,
    patientId: string,
    userId: string
  ) {
    const data = await prismaClient.procedures.create({
      data: {
        name: name,
        doctorId: doctorId,
        patientId: patientId,
        userId: userId,
      },
    });

    return data;
  }

  async getAll() {
    const data = await prismaClient.procedures.findMany({
      orderBy: {
        CreatedAt: "desc",
      },
      include: {
        Patient: true,
        Doctor: true,
      },
    });
    return data;
  }

  async findOne(id: string) {
    const data = await prismaClient.procedures.findFirst({
      where: {
        id,
      },
      include: {
        Patient: true,
        Doctor: true,
      },
    });

    const res = {
      id: data?.id,
      createdAt: dateFormatter(data?.CreatedAt),
      doctorId: data?.doctorId,
      name: data?.name,
      patientId: data?.patientId,
      userId: data?.userId,
      Doctor: {
        id: data?.Doctor.id,
        location: data?.Doctor.location,
        name: data?.Doctor.name,
        specialization: data?.Doctor.specialization,
      },
      Patient: {
        address: data?.Patient.address,
        agreement: data?.Patient.agreement,
        birthDate: dateFormatter(data?.Patient.birthDate),
        city: data?.Patient.city,
        cpf: data?.Patient.cpf,
        createdAt: dateFormatter(data?.Patient.createdAt),
        district: data?.Patient.district,
        houseNumber: data?.Patient.houseNumber,
        id: data?.Patient.id,
        motherName: data?.Patient.motherName,
        municipality: data?.Patient.municipality,
        name: data?.Patient.name,
        phone: data?.Patient.phone,
        rg: data?.Patient.rg,
        sex: data?.Patient.sex,
        userId: data?.Patient.userId,
        updateAt: data?.Patient.updatedAt,
        age:
          new Date().getFullYear() -
          Number(data?.Patient.birthDate.getFullYear()),
      },
    };

    return res;
  }
}

export { ProceduresService };
