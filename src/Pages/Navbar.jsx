import React from 'react'
import logo from "../assets/Images/Logo.png"
import { Link } from 'react-router-dom'
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';




const Navbar = () => {
  return (
    <>
        <nav className='py-[30px]'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="">
                        <ul className='flex items-center gap-[75px] text-[16px] text-black font-poppins font-medium leading-[24px]'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'#'}>Shop</Link></li>
                            <li><Link to={'#'}>About</Link></li>
                            <li><Link to={'#'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex items-center gap-[45px] text-2xl'>
                            <li><Link to={'#'}><FaRegUser/></Link></li>
                            <li><Link to={'#'}><CiSearch/></Link></li>
                            <li><Link to={'#'}><FaRegHeart /></Link></li>
                            <li><Link to={'#'}><AiOutlineShoppingCart /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar