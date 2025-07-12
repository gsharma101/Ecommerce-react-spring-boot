package com.gaurav.repository;

import com.gaurav.model.Cart;
import com.gaurav.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gaurav.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);


}
