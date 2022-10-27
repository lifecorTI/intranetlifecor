export interface ILotPropsRequest {
  lot: {
    productId: string | undefined;
    name: string;
    dueDate: string;
    qtd: number;
  }[];
}
