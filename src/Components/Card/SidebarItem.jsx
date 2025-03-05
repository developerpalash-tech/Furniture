import dining from '../../assets/Images/Dining.png'
import { IoCloseSharp } from "react-icons/io5";




const SidebarItem = () => {
  return (
    <>
        <div className="flex items-center mt-11 mb-5">
            <div className="w-[108px] rounded-[10px] overflow-hidden">
                <img src={dining} alt="img" className='w-full' />
            </div>
            <div className="pl-8 pr-14">
                <h3 className='text-base text-black font-poppins font-normal leading-[24px]'>Asgaard sofa</h3>
                <p>1 X  <span className='text-[12px] text-brandcolor'>BDT.250,000.00</span></p>
            </div>
            <IoCloseSharp className='bg-[#9F9F9F] h-5 w-5 rounded-full text-white'/>
        </div>
    </>
  )
}

export default SidebarItem