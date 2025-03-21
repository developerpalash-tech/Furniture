import { useDispatch } from 'react-redux';
import dining from '../../assets/Images/Dining.png'
import { IoCloseSharp } from "react-icons/io5";
import { removeFromCard } from '../../ProductSlice';


const SidebarItem = ({data}) => {
  const dispatch=useDispatch()
  return (
    <>
        <div className="flex items-center justify-between mt-11 mb-5">
            <div className="w-[108px] rounded-[10px] overflow-hidden">
                <img src={data?.images} alt="img" className='w-full' />
            </div>
            <div className="pl-8 pr-14 mr-auto">
                <p className='text-base text-black font-poppins font-normal leading-[24px]'>{data?.title}</p>
                <p>{data?.quantity}X  <span className='text-[12px] text-brandcolor'>BDT.{data?.price}</span></p>
            </div>
            <IoCloseSharp onClick={()=>dispatch(removeFromCard(data?.id))} className='bg-[#9F9F9F] h-5 w-5 rounded-full text-white'/>
        </div>
    </>
  )
}

export default SidebarItem