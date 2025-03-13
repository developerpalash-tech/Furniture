
import slider1 from '../../assets/Images/Slider1.png'
import slider2 from '../../assets/Images/Slider2.png'
import { BsArrowRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import NextArrow from '../Utilities/NextArrow';




const Explor = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<span></span>
      };
  return (
    <>
        <section className=' bg-[#FCF8F3] py-11 myslider'>
            <div className="container m-auto flex items-center gap-10">
                <div className="w-3/9 yes">
                    <h2 className='text-[40px] text-secondarycolor font-poppins font-bold leading-[48px]'>50+ Beautiful rooms inspiration</h2>
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                </div>
            
                <div className="slider-container w-6/9">
                    <Slider {...settings}>
                    <div className="relative  ">
                <div className="slider_items">
                    <img src={slider1} alt="sliderimg" className='w-full h-full'/>
                </div>
                <div className="py-8 pl-8 pr-4 absolute left-6 bottom-6 bg-[#ffffff8e]">
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px] flex items-center gap-2'> 01 <h5 className='h-[1px] w-[27px] bg-[#616161]'></h5> Bed Room</p>
                    <p className='text-[28px] text-secondarycolor font-poppins font-semibold leading-[33.6px]'>Inner Peace</p>
                </div>
                <div className="py-[18px] px-[15px] bg-brandcolor text-white inline-block absolute left-[214px] bottom-6">
                    < BsArrowRight />
                </div>
                </div>

                    <div className="relative  ">
                <div className="slider_items">
                    <img src={slider2} alt="sliderimg" className='w-full h-full'/>
                </div>
                <div className="py-8 pl-8 pr-4 absolute left-6 bottom-6 bg-[#ffffff8e]">
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px] flex items-center gap-2'> 01 <h5 className='h-[1px] w-[27px] bg-[#616161]'></h5> Bed Room</p>
                    <p className='text-[28px] text-secondarycolor font-poppins font-semibold leading-[33.6px]'>Inner Peace</p>
                </div>
                <div className="py-[18px] px-[15px] bg-brandcolor text-white inline-block absolute left-[214px] bottom-6">
                    < BsArrowRight />
                </div>
                </div>

                    <div className="relative  ">
                <div className="slider_items">
                    <img src={slider1} alt="sliderimg" className='w-full h-full'/>
                </div>
                <div className="py-8 pl-8 pr-4 absolute left-6 bottom-6 bg-[#ffffff8e]">
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px] flex items-center gap-2'> 01 <h5 className='h-[1px] w-[27px] bg-[#616161]'></h5> Bed Room</p>
                    <p className='text-[28px] text-secondarycolor font-poppins font-semibold leading-[33.6px]'>Inner Peace</p>
                </div>
                <div className="py-[18px] px-[15px] bg-brandcolor text-white inline-block absolute left-[214px] bottom-6">
                    < BsArrowRight />
                </div>
                </div>

                    <div className="relative  ">
                <div className="slider_items">
                    <img src={slider1} alt="sliderimg" className='w-full h-full'/>
                </div>
                <div className=" py-8 pl-8 pr-4 absolute left-6 bottom-6 bg-[#ffffff8e]">
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px] flex items-center gap-2'> 01 <h5 className='h-[1px] w-[27px] bg-[#616161]'></h5> Bed Room</p>
                    <p className='text-[28px] text-secondarycolor font-poppins font-semibold leading-[33.6px]'>Inner Peace</p>
                </div>
                <div className="py-[18px] px-[15px] bg-brandcolor text-white inline-block absolute left-[214px] bottom-6">
                    < BsArrowRight />
                </div>
                </div>       
                    <div className="relative  ">
                <div className="slider_items">
                    <img src={slider1} alt="sliderimg" className='w-full h-full'/>
                </div>
                <div className="py-8 pl-8 pr-4 absolute left-6 bottom-6 bg-[#ffffff8e]">
                    <p className='text-base text-[#616161] font-poppins font-semibold leading-[24px] flex items-center gap-2'> 01 <h5 className='h-[1px] w-[27px] bg-[#616161]'></h5> Bed Room</p>
                    <p className='text-[28px] text-secondarycolor font-poppins font-semibold leading-[33.6px]'>Inner Peace</p>
                </div>
                <div className="py-[18px] px-[15px] bg-brandcolor text-white inline-block absolute left-[214px] bottom-6">
                    < BsArrowRight />
                </div>
                </div>       
                    </Slider>
                    </div>
                
            </div>
        </section>
    </>
  )
}

export default Explor