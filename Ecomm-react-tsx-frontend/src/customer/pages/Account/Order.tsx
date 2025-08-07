import React, { useEffect } from 'react'
import OrderItemCard from './OrderItemCard'
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchUserOrderHistory } from '../../../Redux Toolkit/Customer/OrderSlice';
import { Button } from '@mui/material';

const Order = () => {
  const dispatch = useAppDispatch()
    const { cart, auth,orders } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
    }, [auth.jwt])
  return (
    <div className='text-sm min-h-screen'>
       <div className='pb-5'>
       <h1 className='font-semibold'>All orders
        </h1>
        <p>from anytime</p>
       </div>
        <div className='space-y-2'>
            {orders?.orders?.map((order)=>order?.orderItems.map((item)=><OrderItemCard item={item} order={order}/>))}
        </div>
        
    </div>
  )
}

export default Order