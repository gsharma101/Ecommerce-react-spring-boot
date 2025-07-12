package com.gaurav.service.impl;

import com.gaurav.dto.RevenueChart;
import com.gaurav.model.Order;
import com.gaurav.repository.OrderRepository;
import com.gaurav.service.RevenueService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RevenueServiceImpl implements RevenueService {

    private final OrderRepository orderRepository;

    // Get daily revenue data for the past X days
    public List<RevenueChart> getDailyRevenueForChart(int days,Long sellerId) {
        List<RevenueChart> revenueData = new ArrayList<>();
        LocalDate currentDate = LocalDate.now();

        for (int i = days - 1; i >= 0; i--) {
            LocalDate date = currentDate.minusDays(i);
            double dailyRevenue = orderRepository
                    .findBySellerIdAndOrderDateBetween(sellerId,date.atStartOfDay(), date.plusDays(1).atStartOfDay())
                    .stream()
                    .mapToDouble(Order::getTotalSellingPrice)
                    .sum();

            RevenueChart revenueChart=new RevenueChart();
            revenueChart.setRevenue(dailyRevenue);
            revenueChart.setDate(date.toString());

            revenueData.add(revenueChart);
        }

        return revenueData;
    }

    // Get monthly revenue data for the past X months
    public List<RevenueChart> getMonthlyRevenueForChart(int months,Long sellerId) {
        List<RevenueChart> revenueData = new ArrayList<>();
        LocalDate currentDate = LocalDate.now();

        for (int i = months - 1; i >= 0; i--) {
            LocalDate date = currentDate.minusMonths(i);
            LocalDate startOfMonth = date.withDayOfMonth(1);
            LocalDate startOfNextMonth = startOfMonth.plusMonths(1);

            double monthlyRevenue = orderRepository
                    .findBySellerIdAndOrderDateBetween(sellerId,startOfMonth.atStartOfDay(), startOfNextMonth.atStartOfDay())
                    .stream()
                    .mapToDouble(Order::getTotalSellingPrice)
                    .sum();

            RevenueChart revenueChart=new RevenueChart();
            revenueChart.setRevenue(monthlyRevenue);
            revenueChart.setDate( date.getYear() + "-" + String.format("%02d", date.getMonthValue()));

            revenueData.add(revenueChart);
        }

        return revenueData;
    }

    // Get yearly revenue data for the past X years
    public List<RevenueChart> getYearlyRevenueForChart(int years,Long sellerId) {
        List<RevenueChart> revenueData = new ArrayList<>();
        LocalDate currentDate = LocalDate.now();

        for (int i = years - 1; i >= 0; i--) {
            LocalDate startOfYear = currentDate.minusYears(i).withDayOfYear(1);
            LocalDate startOfNextYear = startOfYear.plusYears(1);

            double yearlyRevenue = orderRepository
                    .findBySellerIdAndOrderDateBetween(sellerId,startOfYear.atStartOfDay(), startOfNextYear.atStartOfDay())
                    .stream()
                    .mapToDouble(Order::getTotalSellingPrice)
                    .sum();

            RevenueChart revenueChart=new RevenueChart();
            revenueChart.setRevenue(yearlyRevenue);
            revenueChart.setDate(String.valueOf(startOfYear.getYear()));
            revenueData.add(revenueChart);
        }

        return revenueData;
    }

    @Override
    public List<RevenueChart> getHourlyRevenueForChart(Long sellerId) {
        List<RevenueChart> revenueData = new ArrayList<>();

        // Get the current date
        LocalDate currentDate = LocalDate.now();

        // Define the start of the day (12 AM, or 00:00) and loop through 24 hours
        LocalDateTime startOfDay = currentDate.atStartOfDay(); // 12 AM (00:00) of the current day

        // Loop through each hour of the day from 12 AM to 11:59 PM
        for (int i = 0; i < 24; i++) {
            LocalDateTime startOfHour = startOfDay.plusHours(i);
            LocalDateTime startOfNextHour = startOfHour.plusHours(1); // Next hour boundary

            // Calculate revenue for this hour (from startOfHour to startOfNextHour)
            double hourlyRevenue = orderRepository
                    .findBySellerIdAndOrderDateBetween(sellerId, startOfHour, startOfNextHour)
                    .stream()
                    .mapToDouble(Order::getTotalSellingPrice)
                    .sum();

            // Prepare the data for this hour
            RevenueChart revenueChart = new RevenueChart();
            revenueChart.setRevenue(hourlyRevenue);
            revenueChart.setDate(startOfHour.getHour() + ":00");  // Format as "HH:00" (e.g., "00:00", "01:00")

            // Add the hourly revenue data to the list
            revenueData.add(revenueChart);
        }

        return revenueData;
    }

    @Override
    public List<RevenueChart> getRevenueChartByType(String type,Long sellerId) {
        if(type.equals("monthly")){
            return this.getMonthlyRevenueForChart(12,sellerId);
        }
        else if(type.equals("daily")){
            return this.getDailyRevenueForChart(30,sellerId);
        }
        else return this.getHourlyRevenueForChart(sellerId);
    }

}
