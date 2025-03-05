import React, { useState } from 'react'
import logo from '../../assets/Images/Logo.png'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBarsStaggered } from "react-icons/fa6";
import CardSidebar from '../Card/CardSidebar';

const Navbar = () => {
    const[show,setShow]=useState(false)
  return (
    <>
      <nav className='py-[30px] relative'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <Link to={'/'}><img src={logo} alt="logo" /></Link>
                    </div>
                    {
                       show?
                       <div className="">
                       <ul className='w-1/2 lg:w-auto flex flex-col items-center gap-[75px] lg:flex-row  text-[16px] text-black font-poppins font-medium leading-[24px] absolute lg:static top-full left-0 bg-white h-screen lg:h-auto -translate-x-full transition-all duration-[0.4s]'>
                           <li><Link to={'/'}>Home</Link></li>
                           <li><Link to={'/shop'}>Shop</Link></li>
                           <li><Link to={'#'}>About</Link></li>
                           <li><Link to={'#'}>Contact</Link></li>
                       </ul>
                   </div>
                   :
                   <div className="">
                       <ul className='w-1/2 lg:w-auto flex flex-col items-center gap-[75px] lg:flex-row  text-[16px] text-black font-poppins font-medium leading-[24px] absolute lg:static top-full left-0 bg-white h-screen lg:h-auto -translate-x-0 transition-all duration-[0.4s]'>
                           <li><Link to={'/'}>Home</Link></li>
                           <li><Link to={'/shop'}>Shop</Link></li>
                           <li><Link to={'#'}>About</Link></li>
                           <li><Link to={'#'}>Contact</Link></li>
                       </ul>
                   </div>
                    }
                    
                    <div className="">
                        <ul className='flex items-center gap-[45px] text-2xl'>
                            <li><Link to={'#'}><FaRegUser/></Link></li>
                            <li><Link to={'#'}><CiSearch/></Link></li>
                            <li><Link to={'#'}><FaRegHeart /></Link></li>
                            <li><Link to={'#'}><AiOutlineShoppingCart /></Link></li>
                        </ul>
                    </div>
                    <button onClick={()=>setShow(!show)} className='block lg:hidden'>
                        <FaBarsStaggered className='text-2xl' />    
                    </button>
                    
                </div>
            </div>
        </nav>
        <CardSidebar />
    </>
  )
}

export default Navbar