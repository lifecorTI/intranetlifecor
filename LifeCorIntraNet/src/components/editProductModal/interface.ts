interface ILot {
  name: string;
  id: string;
  dueDate: Date;
  qtd: number;
}
export interface ICategory {
  id: string;
  name: string;
}

export interface IProvider {
  id: string;
  name: string;
  email: string;
  phone: string;
  updatedAt: string;
}

export interface IProductModal {
  id: string;
  name: string;
  length: string;
  isCosigned: boolean;
  price: number;
  pricePt: number;
  lot: ILot[];
  category: ICategory;
  categoryId: string;
  provider: IProvider;
  providerId: string;
}

export interface IUpdateProduct {
  id?: string;
  name?: string;
  length?: string;
  isCosigned?: boolean;
  price?: number;
  pricePt?: number;
  providerId?: string;
  lot?: ILot[];
  categoryId?: string;
}
