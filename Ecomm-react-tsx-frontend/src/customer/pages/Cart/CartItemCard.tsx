import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import type { CartItem } from '../../../types/cartTypes';
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import { deleteCartItem, updateCartItem } from '../../../Redux Toolkit/Customer/CartSlice';

interface CartItemProps {
    item:CartItem
}

const CartItemCard : React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    
    const handleUpdateQuantity=(value:number)=>{
        dispatch(updateCartItem({jwt:localStorage.getItem("jwt"),
            cartItemId:item.id, cartItem:{quantity:item.quantity + value}}))
    }
    const handleRemoveCartItem=()=>{
        dispatch(deleteCartItem({
            jwt:localStorage.getItem("jwt") || "", 
            cartItemId:item.id}))
    }
    return (
        <div className=' border rounded-md relative'>
            <div className='p-5 flex gap-3'>

                <div>
                    <img className='w-[90px] rounded-md' 
                    src={item.product.images[0]}
                    // src="https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw422bdf2e/images/Taneira/Catalog/BFW22CW0042_1.jpg?sw=1000&sh=1500"
                     alt="" />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-lg'>{item.product?.seller?.businessDetails.businessName}</h1>
                    <p className='text-gray-600 font-medium text-sm'>Turquoise Blue Stonework Satin Designer Saree</p>
                    <p className='text-gray-400 text-xs'><strong>Sold by:</strong> Natural Lifestyle Products Private Limited</p>
                    <p className='text-xs'><strong>7 days replacement</strong> available</p>
                    <p className='text-sm text-gray-500'><strong>quantity : </strong> {item.quantity}</p>
                </div>

            </div>
            <Divider />
            <div className='px-5 py-2 flex justify-between items-center'>

                <div className=' flex items-center gap-2  w-[140px] justify-between'>

                    <Button size='small' disabled={item.quantity == 1} onClick={() => handleUpdateQuantity(-1)} >
                        <RemoveIcon />
                    </Button>
                    <span className='px-3  font-semibold'>
                        {item.quantity}
                    </span>
                    <Button size='small' onClick={() => handleUpdateQuantity(1)} >
                        <AddIcon />
                    </Button>

                </div>
                <div>
                    <p className='text-gray-700 font-medium'>₹{item.sellingPrice}</p>
                </div>


            </div>
            <div className='absolute top-1 right-1'>
                <IconButton onClick={handleRemoveCartItem} color='primary' >
                    <CloseIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default CartItemCard