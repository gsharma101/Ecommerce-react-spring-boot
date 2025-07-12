package com.gaurav.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gaurav.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
