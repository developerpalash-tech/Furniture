
import { Link, useLocation } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";


const Breadcrumb = ({title}) => {
    const location=useLocation()
    const path1=location.pathname.split('/')[1]
    // const path2=location.pathname.split('/')[2]
    
    
  return (
    <ul className='flex justify-center items-center gap-6'>
        <li className='text-base text-black font-poppins font-medium leading-[24px] mb-[2px]'><Link to={'/'}>Home</Link></li>
        <li className='text-[15px]'><FaChevronRight/></li>
        <Link to={`/${path1}`} className='text-base text-black font-poppins font-light leading-[24px] capitalize'>{path1}</Link>
        {
          title &&
          <>
            <li className='text-[15px]'><FaChevronRight/></li>
            <p className='text-base text-black font-poppins font-normal leading-[24px] capitalize border-l-2 border-l-[#9F9F9F] pl-[34px]'>{title}</p>
          </>
        }
    </ul>
  )
}

export default Breadcrumb