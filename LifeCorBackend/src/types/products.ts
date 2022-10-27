import { ICategoryResponse } from "./category";
import { ILotResponse } from "./lot";
import { IProviderResponse } from "./provider";

export interface IProductsCreateWithLot {
  name: string;
  ref: string;
  length: string;
  price: number;
  pricePt: number;
  isCosigned: boolean;
  categoryId: string;
  providerId: string;
  lot: {
    name: string;
    dueDate: Date;
    qtd: number;
  };
}

export interface IProductUpdateRequest {
  id: string;
  ref: string;
  name: string;
  length: string;
  isCosigned: boolean;
  price: number;
  pricePt: number;
  lot: ILotResponse[];
  category: ICategoryResponse;
  categoryId: string;
  provider: IProviderResponse;
  providerId: string;
}
