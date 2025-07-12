package com.gaurav.service;

import com.gaurav.model.Deal;

import java.util.List;

public interface DealService {
    Deal createDeal(Deal deal);
//    List<Deal> createDeals(List<Deal> deals);
    List<Deal> getDeals();
    Deal updateDeal(Deal deal,Long id) throws Exception;
    void deleteDeal(Long id) throws Exception;

}
