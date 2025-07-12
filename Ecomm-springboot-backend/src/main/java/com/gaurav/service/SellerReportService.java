package com.gaurav.service;

import com.gaurav.model.Seller;
import com.gaurav.model.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport( SellerReport sellerReport);

}
