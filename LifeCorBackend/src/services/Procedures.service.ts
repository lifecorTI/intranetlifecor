import { prisma } from "../prisma";
import dateFormatter from "../utils/dateFormatterJStoPTBR";

class ProceduresService {
  async create(
    name: string,
    doctorId: string,
    patientId: string,
    userId: string,
    origin: string
  ) {
    const data = await prisma.procedures.create({
      data: {
        name: name,
        doctorId: doctorId,
        patientId: patientId,
        userId: userId,
        origin: origin,
      },
    });

    return data;
  }

  async getAll() {
    const data = await prisma.procedures.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        patient: true,
        doctor: true,
      },
    });
    return data;
  }

  async findOne(id: string) {
    const data = await prisma.procedures.findFirst({
      where: {
        id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    const res = {
      id: data?.id,
      createdAt: dateFormatter(data?.createdAt),
      doctorId: data?.doctorId,
      name: data?.name,
      patientId: data?.patientId,
      userId: data?.userId,
      origin: data?.origin,
      doctor: {
        id: data?.doctor.id,
        location: data?.doctor.location,
        name: data?.doctor.name,
        specialization: data?.doctor.specialization,
      },
      patient: {
        address: data?.patient.address,
        agreement: data?.patient.agreement,
        birthDate: dateFormatter(data?.patient.birthDate),
        city: data?.patient.city,
        cpf: data?.patient.cpf,
        createdAt: dateFormatter(data?.patient.createdAt),
        district: data?.patient.district,
        houseNumber: data?.patient.houseNumber,
        id: data?.patient.id,
        motherName: data?.patient.motherName,
        municipality: data?.patient.municipality,
        name: data?.patient.name,
        phone: data?.patient.phone,
        rg: data?.patient.rg,
        sex: data?.patient.sex,
        userId: data?.patient.userId,
        updateAt: data?.patient.updatedAt,
        age:
          new Date().getFullYear() -
          Number(data?.patient.birthDate.getFullYear()),
      },
    };

    return res;
  }
}

export { ProceduresService };
