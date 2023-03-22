import { Address } from './address.interface';
export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
  address: Address
}
