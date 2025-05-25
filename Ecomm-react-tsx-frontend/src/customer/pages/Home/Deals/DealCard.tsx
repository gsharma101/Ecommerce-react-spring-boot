import { Deal } from '../../../../types/dealTypes'
import { useNavigate } from 'react-router-dom'

const DealCard = ({deal}:{deal:Deal}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/products/${deal.category.categoryId}`)} className='w-full cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top' src={deal.category.image} alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>{deal.category.categoryId.split("_").join(" ")}</p>
            <p className='text-2xl font-bold'>{deal.discount}% OFF</p>
            <p className='text-balance text-lg'>shop now</p>

        </div>
    </div>
  )
}

export default DealCard