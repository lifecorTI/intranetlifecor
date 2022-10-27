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
  ref: string;
  length: string;
  price: number;
  pricePt: number;
  isCosigned: boolean;
  categoryId: string;
  providerId: string;
  lot: lot[];
}

interface lot {
  name: string;
  dueDate: string;
  qtd: number;
}

export interface IProduct {
  id: string;
  ref: string;
  name: string;
  length: string;
  price: number;
  pricePt: number;
  isCosigned: boolean;
  categoryId: string;
  lot: lot[];
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}
