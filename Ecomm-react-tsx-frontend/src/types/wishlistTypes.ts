import type { Product } from "./productTypes";
import type { User } from "./userTypes";

export interface Wishlist {
  id: number;
  user: User;
  products: Product[];
}

export interface WishlistState {
  wishlist: Wishlist | null;
  loading: boolean;
  error: string | null;
}

// Payload interfaces for async thunks
export interface AddProductToWishlistPayload {
  wishlistId: number;
  productId: number;
}
