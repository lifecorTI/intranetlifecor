export interface ICreateProvider {
  name: string;
  email: string;
  phone: string;
}

export interface IResponseProvider extends ICreateProvider {
  id: string;
  createdAt: string;
  updateAt: string;
}
