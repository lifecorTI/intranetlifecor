export interface IProductsSales {
  productId: string;
  salesId: string;
  qtd: number;
  lotId: string;
}

export type IProductsData = IProductsSales[];
