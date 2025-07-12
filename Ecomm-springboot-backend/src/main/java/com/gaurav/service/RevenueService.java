package com.gaurav.service;

import com.gaurav.dto.RevenueChart;

import java.util.List;

public interface RevenueService {
    List<RevenueChart> getDailyRevenueForChart(int days, Long sellerId);
    List<RevenueChart> getMonthlyRevenueForChart(int months,Long sellerId);
    List<RevenueChart> getYearlyRevenueForChart(int years,Long sellerId);
    List<RevenueChart> getHourlyRevenueForChart(Long sellerId);
    List<RevenueChart> getRevenueChartByType(String type,Long sellerId);
}
