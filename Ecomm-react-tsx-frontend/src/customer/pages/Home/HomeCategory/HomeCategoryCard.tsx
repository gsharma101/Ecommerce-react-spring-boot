import React from 'react'
import "./HomeCategoryCard.css"
import { useNavigate } from 'react-router-dom'

const HomeCategoryCard = ({item}:any) => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/products/${item.categoryId}`)} className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
      <div className='custom-border w-[150px] lg:w-[249px] h-[150px] lg:h-[249px] rounded-full bg-teal-400'>
        <img className='group-hover:scale-95 transition-transform transform duration-700  object-cover object-top h-full w-full' src={item.image} alt="" />
      </div>
        <h1 className='font-medium'>{item.name}</h1>
    </div>
  )
}

export default HomeCategoryCard