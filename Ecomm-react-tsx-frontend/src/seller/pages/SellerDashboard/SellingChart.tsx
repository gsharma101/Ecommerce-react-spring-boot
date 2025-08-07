import React, { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchRevenueChart } from '../../../Redux Toolkit/Seller/revenueChartSlice';


const SellingChart = ({chartType}:{chartType:string}) => {
  const dispatch=useAppDispatch()
  const {revenueChart}=useAppSelector(store=>store)

  useEffect(()=>{
    if(chartType){
      dispatch(fetchRevenueChart({type:chartType}))
    }
    
  },[chartType])
    // console.log("daily revenue chart ****** ",revenueChart.dailyRevenue)
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueChart.chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis dataKey={"revenue"}
         stroke= '#8884d8'
        />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#94a3b8" fill="#ffffff" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default SellingChart;