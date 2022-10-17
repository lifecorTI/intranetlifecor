export interface IResponseProvider {
  name: string;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  updateAt: string;
}

export interface ICreateProductWithLot {
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

interface Lot {
  id: string;
  name: string;
  dueDate: Date;
  qtd: number;
}

export interface IProduct {
  id: string;
  name: string;
  length: string;
  price: number;
  pricePt: number;
  isConsigned: boolean;
  categoryId: string;
  Lot: Lot[];
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}
