package com.gaurav.service;


import com.gaurav.exception.WishlistNotFoundException;
import com.gaurav.model.Product;
import com.gaurav.model.User;
import com.gaurav.model.Wishlist;

public interface WishlistService {

    Wishlist createWishlist(User user);

    Wishlist getWishlistByUserId(User user);

    Wishlist addProductToWishlist(User user, Product product) throws WishlistNotFoundException;

}

