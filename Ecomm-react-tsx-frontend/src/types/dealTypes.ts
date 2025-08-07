import type { HomeCategory } from "./homeDataTypes";

export interface Deal{
    id?: number;
    discount:number;
    category: HomeCategory;
}
// types.ts
  
  export interface ApiResponse {
    message: string;
    status: boolean;
  }
  
  export interface DealsState {
    deals: Deal[];
    loading: boolean;
    error: string | null;
    dealCreated:boolean,
    dealUpdated:boolean,
  }
  