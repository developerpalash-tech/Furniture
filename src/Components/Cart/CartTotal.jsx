import React from 'react'
import image from '../../assets/Images/Dining.png'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from "react-icons/ri";
import Cartbutton from '../Utilities/Cartbutton';



const CartTotal = () => {
  return (
    <section className='py-[66px]'>
        <div className="container m-auto">
            <div className="flex justify-between gap-[30px]">
                <div className="w-8/12 ">
                <ul className='flex  justify-center gap-32 ml-14 text-base text-black font-poppins font-semibold py-4 px-[144px] bg-[#F9F1E7]'>
                    <li><h3>Product</h3></li>
                    <li><h3>Price</h3></li>
                    <li><h3>Quantity</h3></li>
                    <li><h3>Subtotal</h3></li>
                </ul>
                <div className="flex justify-between  items-center pt-14">
                    <div className="w-[108px] h-[105px]">
                        <img src={image} alt="img" />
                    </div>
                    <p>Asgaard sofa</p>
                    <p>Rs. 250,000.00</p>
                    <div className="w-8 h-8 border-[1px] border-[#9F9F9F] rounded-[5px] text-center leading-8">1</div>
                    <p>Rs. 250,000.00</p>
                    <RiDeleteBin7Fill className='text-2xl text-brandcolor mr-6'/>
                </div>
                </div>
                
                <div className="w-4/12 px-[75px] pt-4 pb-20 bg-[#F9F1E7] h-fit">
                    <h2 className='text-center text-[32px] text-black font-poppins font-semibold leading-normal pb-[61px]'>Cart Totals</h2>
                    <div className="flex justify-between items-center pb-[31px]">
                        <h3 className='text-[16px] text-black font-poppins font-medium'>Subtotal</h3>
                        <p className='text-[16px] text-[#9F9F9F] font-poppins font-normal'>BDT. 250,000.00</p>
                    </div>
                    <div className="flex justify-between pb-11">
                        <h3 className='text-[16px] text-black font-poppins font-medium'>Total</h3>
                        <p className='text-[20px] text-brandcolor font-poppins font-medium'>BDT. 250,000.00</p>
                    </div>
                    <div className="text-center text-[20px] text-black font-poppins font-normal">
                        <Cartbutton title={'Check Out'} path={'/checkout'}/>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </section>
    
  )
}

export default CartTotal