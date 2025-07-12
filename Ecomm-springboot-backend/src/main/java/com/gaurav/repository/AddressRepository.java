package com.gaurav.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gaurav.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
