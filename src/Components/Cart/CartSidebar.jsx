import { TbLockX } from "react-icons/tb";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import Cartbutton from "../Utilities/Cartbutton";


const CartSidebar = ({handelCartClose}) => {
  
  return (
    <>
        <div className=" z-10 top-0 right-0 w-full fixed h-full bg-[rgba(0,0,0,0.2)]">
            <div className="w-fit py-7  bg-white ml-auto h-[746px]">
                <div className=" flex justify-between items-center gap-[150px] pb-7 border-b border-b-[#D9D9D9] px-6">
                    <h2 className='text-2xl text-black font-poppins font-semibold leading-[36px]'>Shopping Cart</h2>
                    <TbLockX className="text-[#9F9F9F] text-2xl" onClick={()=>handelCartClose(false)}/>
                </div>
                <div className="sidebar h-[460px] overflow-y-scroll px-6">
                  <SidebarItem/>
                  <SidebarItem/>
                  <SidebarItem/>
                  <SidebarItem/>
                  <SidebarItem/>
                  <SidebarItem/>
                </div>
                <div className="flex items-center pt-2 pb-6 border-b border-b-[#D9D9D9] px-6">
                  <p className="text-base text-black font-poppins font-normal">Subtotal</p>
                  <p className="text-base text-brandcolor font-poppins font-semibold pl-[100px]">BDT. 520,000.00</p>
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