import React from 'react'
import ProductItems from '../ProductItems'
import { Link } from 'react-router-dom'

const RelatedProduct = () => {
  return (
    <section className='pt-[55px] pb-[104px]'>
        <div className="container m-auto">
            <h2 className='text-center text-4xl text-black font-poppins font-medium leading-[36px] pb-[26px]'>Related Products</h2>
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
  )
}

export default RelatedProduct