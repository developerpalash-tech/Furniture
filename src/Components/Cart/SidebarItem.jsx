import dining from '../../assets/Images/Dining.png'
import { IoCloseSharp } from "react-icons/io5";




const SidebarItem = ({data}) => {
  return (
    <>
        <div className="flex items-center mt-11 mb-5">
            <div className="w-[108px] rounded-[10px] overflow-hidden">
                <img src={data?.images} alt="img" className='w-full' />
            </div>
            <div className="pl-8 pr-14">
                <h3 className='text-base text-black font-poppins font-normal leading-[24px]'>{data?.title}</h3>
                <p>{data?.quantity}X  <span className='text-[12px] text-brandcolor'>BDT.{data?.price}</span></p>
            </div>
            <IoCloseSharp className='bg-[#9F9F9F] h-5 w-5 rounded-full text-white'/>
        </div>
    </>
  )
}

export default SidebarItem