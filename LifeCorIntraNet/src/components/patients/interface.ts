export interface IPatient {
  id: string;
  name: string;
  birthDate: Date;
  phone: string;
  sex: string;
  cpf?: string;
  rg?: string;
  motherName: string;
  address?: string;
  houseNumber?: number;
  district?: string;
  agreement: string;
  city?: string;
  municipality?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
