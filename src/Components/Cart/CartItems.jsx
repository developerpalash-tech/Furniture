import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { removeFromCard } from '../../ProductSlice'

const CartItems = ({data}) => {
  const dispatch=useDispatch()
  return (
    <>
        <div  className="flex justify-between  items-center pt-14">
            <div className="w-[108px] h-[105px]">
                <img src={data?.images} alt="img" />
            </div>
            <p>{data?.title}</p>
            <p>BDT. {data?.price}</p>
            <div className="w-8 h-8 border-[1px] border-[#9F9F9F] rounded-[5px] text-center leading-8">{data?.quantity}</div>
            <p>BDT. {data?.individualPrice}</p>
            <RiDeleteBin7Fill onClick={()=>dispatch(removeFromCard(data?.id))} className='text-2xl text-brandcolor mr-6'/>
        </div>
    </>
  )
}

export default CartItems