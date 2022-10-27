export interface IProcedures {
  id: string;
  doctorId: string;
  name: string;
  origin: string;
  patientId: string;
  userId: string;
  createdAt: Date;
  updateAt: Date;
  sales: ISales[];
}

interface product {
  name: string;
  isCosigned: boolean;
  price: number;
  pricePt: number;
  ref: string;
  length: string;
}

interface lot {
  id: string;
  dueDate: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  product: product;
}

interface productSales {
  id: string;
  lotId: string;
  productId: string;
  qtd: number;
  salesId: string;
  lot: lot;
}

export interface ISales {
  id: string;
  userId: string;
  patentId: string;
  productSales: productSales[];
  proceduresId: string;
  updatedAt: number;
  createdAt: string;
}

export interface IResPatient {
  Procedures: IProcedures[];
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
