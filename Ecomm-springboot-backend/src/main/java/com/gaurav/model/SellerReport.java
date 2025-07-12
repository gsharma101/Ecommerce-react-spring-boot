package com.gaurav.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SellerReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Seller seller;

    private Long totalEarnings = 0L;

    private Long totalSales= 0L;

    private Long totalRefunds= 0L;

    private Long totalTax = 0L;

    private Long netEarnings = 0L;

    private Integer totalOrders= 0;

    private Integer canceledOrders=0;

    private Integer totalTransactions=0;


}
