package com.gaurav.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddItemRequest {

	private Long productId;
	private String size;
	private int quantity;
	private Integer price;
	

	
}
