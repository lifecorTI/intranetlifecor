export interface IProcedures {
  id: string;
  doctorId: string;
  doctor: IDoctor;
  name: string;
  origin: string;
  patientId: string;
  userId: string;
  createdAt: Date;
  updateAt: Date;
}

export interface IDoctor {
  id: string;
  name: string;
  specialization: string;
  location: string;
}

export interface ISales {
  id: string;
  userId: string;
  patentId: string;
  proceduresId: string;
  updatedAt: number;
  createdAt: string;
  _count: {
    productSales: string;
  };
}

export interface IResPatient {
  Procedures: IProcedures[];
  Sales: ISales[];
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
