package com.gaurav.response;

import com.gaurav.dto.OrderHistory;
import com.gaurav.model.Cart;
import com.gaurav.model.Product;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FunctionResponse {
    private String functionName;
    private Cart userCart;
    private OrderHistory orderHistory;
    private Product product;
}
