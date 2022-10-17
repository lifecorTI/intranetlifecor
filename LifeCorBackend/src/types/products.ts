export interface IProductsCreateWithLot {
  name: string;
  length: string;
  price: number;
  pricePt: number;
  isConsigned: boolean;
  categoryId: string;
  providerId: string;
  lot: {
    name: string;
    dueDate: Date;
    qtd: number;
  };
}
