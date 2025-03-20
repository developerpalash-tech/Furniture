import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const CartItems = ({data}) => {
  return (
    <>
        <div  className="flex justify-between  items-center pt-14">
            <div className="w-[108px] h-[105px]">
                <img src={data?.images} alt="img" />
            </div>
            <p>{data?.title}</p>
            <p>Rs. 250,000.00</p>
            <div className="w-8 h-8 border-[1px] border-[#9F9F9F] rounded-[5px] text-center leading-8">1</div>
            <p>Rs. 250,000.00</p>
            <RiDeleteBin7Fill className='text-2xl text-brandcolor mr-6'/>
        </div>
    </>
  )
}

export default CartItems