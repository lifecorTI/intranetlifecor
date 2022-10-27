import { IProduct } from "../listProducts/interface";

interface productSales {}

export interface IResponseProductsSales {
  id: string;
  lotId: string;
  productId: string;
  qtd: number;
  salesId: string;
  sales: {
    id: string;
    userId: string;
    proceduresId: string;
    patientId: string;
    createdAt: string;
    updateAt: string;
    patient: {
      name: string;
    };
  };
  product: {
    id: string;
    ref: string;
    name: string;
    price: number;
    pricePt: number;
    providerId: string;
    categoryId: string;
    length: string;
    isConsigned: boolean;
  };
  lot: {
    createdAt: string;
    dueDate: string;
    id: string;
    name: string;
    productId: string;
    qtd: number;
    updatedAt: string;
  };
}
