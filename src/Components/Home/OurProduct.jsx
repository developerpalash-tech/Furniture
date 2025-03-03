import React from 'react'
import ProductItems from '../ProductItems'
import { Link } from 'react-router-dom'

const OurProduct = () => {
  return (
    <>
        <section className='mb-[70px]'>
            <div className="container m-auto">
                <h2 className='text-[40px] text-[#3A3A3A] font-poppins font-bold leading-[48px] text-center mb-[30px]'>Our Products</h2>
                <div className=" grid grid-cols-4 gap-8">
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                </div>
                <div className="flex justify-center mt-8">
                    <Link to={'/shop'} className='text-base text-brandcolor font-poppins font-semibold leading-[24px] py-3 px-20 border-2 border-brandcolor '>Show More</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurProduct