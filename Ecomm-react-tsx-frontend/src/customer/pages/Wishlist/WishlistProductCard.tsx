import React, { useState, useEffect, MouseEvent } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { teal } from '@mui/material/colors';
import { Button, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import type { Product } from '../../../types/productTypes';
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { addProductToWishlist } from '../../../Redux Toolkit/Customer/WishlistSlice';

interface ProductCardProps {
    item: Product;
}

const WishlistProductCard: React.FC<ProductCardProps> = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleIconClick = (e:MouseEvent) => {
        setIsFavorite((prev) => !prev);
        if(item.id)
        dispatch(addProductToWishlist({productId:item.id}))
    };



    return (
        <div className='w-60 relative '>
            <div
                className="w-full"
            >

                <img
                    className=" object-top w-full"
                    src={item.images[0]}
                    alt={`product-${item.title}`}

                />



            </div>
            <div className='pt-3 space-y-1  rounded-md '>
                <div className=' space-y '>
            
                    <p className=''>{item.title}</p>

                </div>
                <div className=' flex items-center gap-3 '>
                    <span className='font-semibold text-gray-800'> ₹{item.sellingPrice}</span>
                    <span className='text thin-line-through text-gray-400 '>₹{item.mrpPrice}</span>
                    <span className='text-[#00927c] font-semibold'>{item.discountPercent}% off</span>
                </div>



            </div>

<div className='absolute top-1 right-1'>
     
     <button
     onClick={handleIconClick}
      >
 <CloseIcon className='cursor-pointer bg-white rounded-full p-1' sx={{ color: teal[500],fontSize:"2rem"  }} />
     </button>
               
</div>
            
        </div>
    );
};



export default WishlistProductCard