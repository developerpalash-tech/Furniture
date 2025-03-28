import React from 'react'

import { Link } from 'react-router-dom'

const ProductItems = ({palash}) => {
   console.log(palash);
   


  return (
    <>
        <Link to={`/shop/${palash?.id}`} className=" relative group overflow-hidden h-fit">
            <div className=" ">
                <div className="w-full">
                    <img src={palash?.category.image} alt="img" className='w-full' />
                </div>
                <div className=" absolute bg-[#3a3a3a93] w-full h-full top-0 left-0 flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-[0.5s]">
                    <button className='text-base text-brandcolor font-poppins font-semibold leading-[24px] py-3 px-14 bg-white'>Add to cart</button>
                </div>
            </div>
            <div >
                <div className="mt-4 px-[18px] ">
                    <p className='text-2xl text-secondarycolor font-poppins font-semibold leading-[28px]'>{palash?.title}</p>
                    <p className='text-base text-[#898989] font-poppins font-medium leading-[24px]'>{palash?.description.substring(0, 70)}...</p>
                </div>
                
                <div className=" flex gap-4 mb-[30px] px-[18px] justify-between">
                    <p className='text-[20px] text-secondarycolor font-poppins font-semibold leading-[30px]'>BDT {palash?.price}</p>
                    <p className='text-base text-[#B0B0B0] font-poppins font-normal leading-[24px] line-through'>Rp 3.500.000</p>
                </div>
            </div>
            
        </Link>
    </>
  )
}

export default ProductItems