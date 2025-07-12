package com.gaurav.service;

import com.gaurav.model.Order;
import com.gaurav.model.Seller;
import com.gaurav.model.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySeller(Seller seller);
    List<Transaction>getAllTransactions();
}
