import { TbLockX } from "react-icons/tb";
import SidebarItem from "./SidebarItem";
import Cartbutton from "../Utilities/Cartbutton";
import { useSelector } from "react-redux";
import { useState } from "react";


const CartSidebar = ({handelCartClose}) => {
  const productList=useSelector((state)=>state.productData.value)
  const totalPrice=productList.reduce((total, product)=>total+product.price,0)
  
  return (
    <>
        <div className=" z-10 top-0 right-0 w-full fixed h-full bg-[rgba(0,0,0,0.2)]">
            <div className="w-fit py-7  bg-white ml-auto h-[746px]">
                <div className=" flex justify-between items-center gap-[150px] pb-7 border-b border-b-[#D9D9D9] px-6">
                    <h2 className='text-2xl text-black font-poppins font-semibold leading-[36px]'>Shopping Cart</h2>
                    <TbLockX className="text-[#9F9F9F] text-2xl" onClick={()=>handelCartClose(false)}/>
                </div>
                <div className="sidebar h-[460px] overflow-y-scroll px-6">
                 {
                  productList.map((item)=>(
                    <SidebarItem key={item.key} data={item}/>
                  ))
                 }
                  
                </div>
                <div className="flex items-center pt-2 pb-6 border-b border-b-[#D9D9D9] px-6">
                  <p className="text-base text-black font-poppins font-normal">Subtotal</p>
                  <p className="text-base text-brandcolor font-poppins font-semibold pl-[100px]">BDT. {totalPrice}</p>
                </div>
                <div className="flex justify-center items-center gap-[14px] pt-[26px] px-6">
                  <Cartbutton path={"/cart"} title={"Cart"}/>
                  <Cartbutton path={"checkout"} title={"Checkout"}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartSidebar