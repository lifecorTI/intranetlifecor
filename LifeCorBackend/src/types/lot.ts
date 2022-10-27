export interface ILotCreate {
  lot: { productId: string; name: string; dueDate: Date; qtd: number }[];
}

export interface ILotResponse {
  name: string;
  id: string;
  dueDate: string;
  qtd: number;
}
