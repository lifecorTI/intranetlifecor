export interface IPatient {
  id: string;
  name: string;
  birthDate: Date;
  phone: string;
  sex: string;
  cpf?: string;
  rg?: string | null;
  motherName: string;
  address?: string | null;
  houseNumber: number | null;
  district?: string | null;
  agreement: string;
  city?: string | null;
  municipality?: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
