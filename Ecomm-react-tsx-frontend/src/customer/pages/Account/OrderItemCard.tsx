import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Avatar, Button } from '@mui/material';
import { teal } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import type { Order, OrderItem } from '../../../types/orderTypes';
import { formatDate } from '../../util/fomateDate';

interface OrderItemCardProps{
    item:OrderItem,
    order:Order
}
const OrderItemCard:React.FC<OrderItemCardProps> = ({item,order}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/account/orders/${order.id}/${item.id}`)} className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>

            <div className='flex items-center gap-3'>
                <div>
                    <Avatar sizes='small' sx={{ bgcolor: teal[500] }}>
                        <ElectricBoltIcon />
                    </Avatar>

                </div>
                <div>
                    <h1 className='font-bold text-teal-600'>{order.orderStatus}
                    </h1>
                    <p>Arriving by {formatDate(order.deliverDate)}</p>
                </div>
            </div>
            <div className='p-5 bg-teal-50 flex gap-3 '>
                <div className=''>
                    <img className='w-[70px]'
                     src={item.product.images[0]} alt="" />
                </div>
                <div className='w-full space-y-2'>
                    <h1 className='font-bold'>{item.product.seller?.businessDetails.businessName}
                    </h1>
                    <p>
                        {item.product.title}
                    </p>
                    <p><strong>size : </strong>
                        FREE</p>

                </div>


            </div>

        </div>
    )
}

export default OrderItemCard