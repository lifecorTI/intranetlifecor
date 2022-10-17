interface Lot {
  id: string;
  name: string;
  dueDate: Date;
  qtd: number;
}
export interface IProduct {
  id: string;
  name: string;
  price: number;
  pricePt: number;
  providerId: string;
  categoryId: string;
  length: string;
  isConsigned: boolean;
  Lot: Lot[];
}
