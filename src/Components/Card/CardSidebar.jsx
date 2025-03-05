import { TbLockX } from "react-icons/tb";
import SidebarItem from "./SidebarItem";


const CardSidebar = () => {
  return (
    <>
        <div className=" z-10 top-0 right-0 w-full fixed h-full bg-[rgba(0,0,0,0.2)]">
            <div className="w-fit py-7 px-6 bg-white ml-auto">
                <div className=" flex justify-between items-center gap-[150px] pb-7 border-b border-b-[#D9D9D9] ">
                    <h2 className='text-2xl text-black font-poppins font-semibold leading-[36px]'>Shopping Cart</h2>
                    <TbLockX className="text-[#9F9F9F]"/>
                </div>
                <SidebarItem/>
            </div>
        </div>
    </>
  )
}

export default CardSidebar