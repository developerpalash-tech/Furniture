import React from 'react'
import banner from '../../assets/Images/Banner.png'
import Button from '../Button'

const Banner = () => {
  return (
    <>
<section
        className="banner pt-[157px] pb-[117px]" style={{backgroundImage: `url(${banner})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="container m-auto">
          <div className="w-1/2 px-[41px] pt-[60px] pb-[40px] ml-auto bg-[#FFF3E3]">
            <h2 className='text-base text-primarycolor font-poppins font-semibold tracking-[3px]'>New Arrival</h2>
            <h1 className='text-[52px] text-brandcolor font-bold font-poppins leading-[65px] w-[400px]'>Discover Our New Collection</h1>
            <p className='text-[18px] text-primarycolor font-medium font-poppins leading-[24px] w-[440px] mb-[46px] mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Button title="BUY NOW" path="/shop"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner