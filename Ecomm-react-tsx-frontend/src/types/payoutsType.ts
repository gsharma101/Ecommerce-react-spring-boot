// types/payoutsTypes.ts

import type { Order } from "./orderTypes";
import type { Seller } from "./sellerTypes";
import type { Transaction } from "./Transaction";
import type { User } from "./userTypes";

export interface Payouts {
  id: number;
  transactions: Transaction[];
  seller: Seller;
  amount: number;
  status: "PENDING" | "SUCCESS" | "REJECTED";
  date: string;
}
