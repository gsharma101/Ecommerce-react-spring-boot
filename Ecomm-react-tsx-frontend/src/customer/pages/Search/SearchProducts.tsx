import React, { ChangeEvent, useState } from 'react'
import { searchProduct } from '../../../Redux Toolkit/Customer/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import ProductCard from '../Products/ProductCard/ProductCard';

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(store => store)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }
  const handleProductSearch = () => {
    dispatch(searchProduct(searchQuery))
  }
  return (
    <div className='min-h-screen px-20'>
      <div className="flex justify-center py-5">
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleProductSearch();
              console.log("Searching for ", searchQuery);
            }
          }}
          onChange={handleSearchChange}
          className="border-none outline-none bg-slate-100 px-10 py-3 w-full lg:w-1/2" type="text" placeholder="Search Product..." />
      </div>
      <section>
        {products.searchProduct?.length > 0 ? (
          <section className="grid sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {products.searchProduct.map((item: any, index: number) => (
              <div key={index * 9} className="">
                <ProductCard item={item} />
              </div>
            ))}
          </section>
        ) : 
        // searchQuery ? (
        //   <section className="items-center flex flex-col gap-5 justify-center h-[67vh] border">
        //     <img
        //       className="w-80"
        //       src="https://cdn.pixabay.com/photo/2022/05/28/10/45/oops-7227010_960_720.png"
        //       alt=""
        //     />
        //     <h1 className="font-bold text-xl text-center flex items-center gap-2">
        //       Product Not Found For
        //       <p className="text-primary-color flex gap-2 uppercase">

        //         {searchQuery}
        //       </p>
        //     </h1>
        //   </section>
        // ) : 
        <div className='h-[70vh] flex flex-col justify-center items-center'>
          <h1 className='font-bold text-6xl'>
            Search Product Here
          </h1></div>}
      </section>
    </div>
  )
}

export default SearchProducts