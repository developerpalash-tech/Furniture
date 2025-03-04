
import { Link, useLocation } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";


const Breadcrumb = () => {
    const location=useLocation()
    const path=location.pathname.split('/')[1]
    
  return (
    <ul className='flex justify-center items-center gap-[6px]'>
        <li className='text-base text-black font-poppins font-medium leading-[24px] mb-[2px]'><Link to={'/'}>Home</Link></li>
        <li className='text-[15px]'><FaChevronRight/></li>
        <p className='text-base text-black font-poppins font-light leading-[24px] capitalize'>{path}</p>
    </ul>
  )
}

export default Breadcrumb