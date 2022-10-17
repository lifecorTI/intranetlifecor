export interface IResponseProcedure {
  id: string;
  createdAt: Date;
  doctorId: string;
  name: string;
  patientId: string;
  userId: string;
  Doctor: {
    id: string;
    location: string;
    name: string;
    specialization: string;
  };
  Patient: {
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
