export interface productSales {
  salesId: string;
  lotId: string;
  ref: string;
  productId: string;
  qtd: number;
}
export interface ISalesProduct {
  name: string;
  ref: string;
  lotId: string;
  length: string;
  lotName: string;
  productId: string;
  qtd?: number;
}
