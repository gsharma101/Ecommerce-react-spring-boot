import type { Product } from "./productTypes";
import type { User } from "./userTypes";

export interface Review {
    id: number;
    reviewText: string;
    rating: number;
    user: User;
    product: Product;
    productImages:string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreateReviewRequest {
    reviewText: string;
    reviewRating: number;
  }
  
  export interface ApiResponse {
    message: string;
    status: boolean;
  }
  
  export interface ReviewState {
    reviews: Review[];
    loading: boolean;
    error: string | null;
    reviewCreated: boolean;
    reviewUpdated: boolean;
    reviewDeleted: boolean;
  }
  