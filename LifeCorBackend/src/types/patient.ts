export interface IPatient {
  userId: string;
  name: string;
  birthDate: Date;
  phone: string;
  sex: string;
  cpf: string;
  rg: string;
  address: string;
  houseNumber: number;
  district: string;
  agreement: string;
  city: string;
  municipality: string;
  motherName: string;
}

export interface ICreatePatientWithProcedure {
  patient: IPatient;
  name: string;
  origin: string;
  doctorId: string;
}
