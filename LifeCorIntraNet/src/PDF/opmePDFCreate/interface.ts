export interface IResponseProcedure {
  id: string;
  createdAt: Date;
  doctorId: string;
  origin: string;
  name: string;
  patientId: string;
  userId: string;
  doctor: {
    id: string;
    location: string;
    name: string;
    specialization: string;
  };
  patient: {
    address: string;
    agreement: string;
    birthDate: string;
    city: string;
    cpf: string;
    createdAt: string;
    district: string;
    houseNumber: number;
    id: string;
    motherName: string;
    municipality: string;
    name: string;
    phone: string;
    rg: string;
    sex: string;
    userId: string;
    updateAt: string;
    age: string;
  };
}
