import type { Order } from "./orderTypes";
import type { Seller } from "./sellerTypes";
import type { User } from "./userTypes";

export interface Transaction {
  id: number;
  customer: User;
  order: Order;
  seller: Seller;
  date: string;
}
