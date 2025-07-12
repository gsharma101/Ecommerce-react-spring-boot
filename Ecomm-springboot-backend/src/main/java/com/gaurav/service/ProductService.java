package com.gaurav.service;

import com.gaurav.exception.ProductException;
import com.gaurav.model.Product;
import com.gaurav.model.Seller;
import com.gaurav.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest req,

                                 Seller seller) throws ProductException;

    public void deleteProduct(Long productId) throws ProductException;

    public Product updateProduct(Long productId,Product product)throws ProductException;


    public Product findProductById(Long id) throws ProductException;


    public List<Product> searchProduct(String query);

   public Page<Product> getAllProduct(String category,
                                      String brand,
                                      String colors,
                                      String sizes,
                                      Integer minPrice,
                                      Integer maxPrice,
                                      Integer minDiscount,
                                      String sort,
                                      String stock,
                                      Integer pageNumber);

    public List<Product> recentlyAddedProduct();
    List<Product> getProductBySellerId(Long sellerId);
}
