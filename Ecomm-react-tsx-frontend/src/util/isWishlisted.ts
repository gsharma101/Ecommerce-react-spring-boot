import type { Product } from "../types/productTypes";
import type { Wishlist } from "../types/wishlistTypes";

export function isWishlisted(wishlist: Wishlist, product: Product) {
  return wishlist?.products.some((p) => p.id === product.id);
  
}
