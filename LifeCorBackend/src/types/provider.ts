export interface IProviderCreate {
  name: string;
  email: string;
  phone: string;
}

export interface IProviderResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  updatedAt: string;
}
