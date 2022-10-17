export interface IProcedures {
  id: string;
  doctorId: string;
  Doctor: IDoctor;
  name: string;
  patientId: string;
  userId: string;
  CreatedAt: Date;
  updateAt: Date;
}

export interface IDoctor {
  id: string;
  name: string;
  specialization: string;
  location: string;
}

export interface ISales {
  userId: string;
  patentId: string;
  productId: string;
  qtd: number;
}

export interface IResPatient {
  Procedures: IProcedures[];
  Sales: ISales;
  id: string;
  name: string;
  birthDate: Date;
  phone: string;
  sex: string;
  cpf: string;
  rg: string;
  motherName: string;
  address: string;
  houseNumber?: number;
  district: string;
  agreement: string;
  city: string;
  municipality: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
