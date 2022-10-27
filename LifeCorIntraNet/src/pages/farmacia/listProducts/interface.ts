interface lot {
  id: string;
  name: string;
  dueDate: Date;
  qtd: number;
}
export interface IProduct {
  id: string;
  name: string;
  ref: string;
  price: number;
  pricePt: number;
  providerId: string;
  categoryId: string;
  length: string;
  isCosigned: boolean;
  lot: lot[];
}
