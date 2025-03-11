import React from 'react'
import product from "../assets/Images/Product1.png"
import { Link } from 'react-router-dom'

const ProductItems = () => {
  return (
    <>
        <div className=" cursor-pointer">
            <div className=" relative group">
                <div className="">
                    <img src={product} alt="img" className='w-full' />
                </div>
                <div className=" absolute bg-[#3a3a3a93] w-full h-full top-0 left-0 flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-[0.5s]">
                    <button className='text-base text-brandcolor font-poppins font-semibold leading-[24px] py-3 px-14 bg-white'>Add to cart</button>
                </div>
            </div>
            <Link to={'/shop/details'}>
                <div className="mt-4 px-[18px]">
                    <h3 className='text-2xl text-secondarycolor font-poppins font-semibold leading-[28px]'>Syltherine</h3>
                    <p className='text-base text-[#898989] font-poppins font-medium leading-[24px]'>Stylish cafe chair</p>
                </div>
                
                <div className=" flex gap-4 mb-[30px] px-[18px]">
                    <p className='text-[20px] text-secondarycolor font-poppins font-semibold leading-[30px]'>Rp 2.500.000</p>
                    <p className='text-base text-[#B0B0B0] font-poppins font-normal leading-[24px] line-through'>Rp 3.500.000</p>
                </div>
            </Link>
            
        </div>
    </>
  )
}

export default ProductItems