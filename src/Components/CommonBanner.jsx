import React from 'react'
import Breadcrumb from './Breadcrumb'
import banner from '../assets/Images/shop_banner.png'
import logo_icon from "../assets/Images/logo_icon.png"


const CommonBanner = ({title}) => {
  return (
    <section className="pt-[121px] pb-[97px]" style={{backgroundImage: `url(${banner})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="container m-auto">
            <img src={logo_icon} alt="logo_icon" className='m-auto'/>
            <h2 className="text-center text-5xl text-black font-poppins font-medium leading-[72px]">{title}</h2>
            <Breadcrumb/>
        </div>
    </section>
    
  )
}

export default CommonBanner