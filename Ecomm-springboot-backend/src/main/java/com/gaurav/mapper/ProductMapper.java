package com.gaurav.mapper;

import com.gaurav.dto.ProductDto;
import com.gaurav.model.Product;

public class ProductMapper {

    public static ProductDto toProductDto(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setTitle(product.getTitle());
        productDto.setDescription(product.getDescription());
        productDto.setMrpPrice(product.getMrpPrice());
        productDto.setSellingPrice(product.getSellingPrice());
        productDto.setDiscountPercent(product.getDiscountPercent());
        productDto.setQuantity(product.getQuantity());
        productDto.setColor(product.getColor());
        productDto.setImages(product.getImages());
        productDto.setNumRatings(product.getNumRatings());
        productDto.setCreatedAt(product.getCreatedAt());
        productDto.setSizes(product.getSizes());

        return productDto;
    }
    public Product mapToEntity(ProductDto productDto) {
        return null;
    }
}
