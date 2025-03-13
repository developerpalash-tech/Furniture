import React from 'react'
import logo2 from '../assets/Images/footer_logo.png'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <footer className='border-t-[1px] border-t-[#D9D9D9] pb-[38px]'>
        <div className="container m-auto">
            <div className="flex justify-between py-12 border-b-[1px] border-b-[#D9D9D9]">
            <div className=''>
                <img src={logo2} alt="logo" />
                <p className='text-base text-[#9F9F9F] font-poppins font-normal leading-[24px] w-[285px] pt-[50px]'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <ul>
                <li><p className='text-base text-[#9F9F9F] font-poppins font-medium leading-[24px] pb-7'>Links</p></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px] pb-[45px]'><Link to={'/'}>Home</Link></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px] pb-[45px]'><Link to={'/shop'}>Shop</Link></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px] pb-[45px]'><Link to={'/'}>About</Link></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px]'><Link to={'/'}>Contact</Link></li>
            </ul>
            <ul>
                <li><p className='text-base text-[#9F9F9F] font-poppins font-medium leading-[24px] pb-7'>Help</p></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px] pb-[45px]'><Link to={'/'}>Payment Options</Link></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px] pb-[45px]'><Link to={'/'}>Returns</Link></li>
                <li className='text-base text-[#000000] font-poppins font-medium leading-[24px]'><Link to={'/'}>Privacy Policies</Link></li>
            </ul>
            <div className="text-base text-[#9F9F9F] font-poppins font-medium leading-[24px]]">
                
                <p className=''>Newsletter</p>
                <span className='flex justify-between gap-2'>
                <input type="text" placeholder='Enter Your Email Address' className=' border-b-[1px] border-b-black' />
                <h4 className='text-[14px] text-black font-poppins font-medium leading-[21px] border-b-[1px] border-b-black'>SUBSCRIBE</h4>
                </span>
            </div>
            </div>
            <h3 className='text-base text-[#000000] font-poppins font-normal leading-[24px]  pt-9'>2023 furino. All rights reverved</h3>
        </div>
    </footer>
  )
}

export default Fotter