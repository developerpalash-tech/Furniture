import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import InputBox from "../LayOut/InputBox";


const WithUs = () => {
  return (
    <section className='pt-[98px] pb-[63px]'>
        <div className="container m-auto">
            <h2 className='text-center text-4xl text-black font-poppins font-semibold pb-[7px]'>Get In Touch With Us</h2>
            <p className='w-[644px] text-center m-auto text-base text-[#9F9F9F] font-poppins font-normal'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            <div className="flex justify-center gap-[30px] pt-[97px]">
                <div className="pl-12 pr-19 pt-9">
                    <div className="flex items-start gap-[30px]">
                        
                            <FaLocationDot className="text-2xl"/>
                       
                        <div>
                        <h3 className="text-2xl text-black font-poppins font-medium leading-normal">Address</h3>
                        <p className="w-[212px] text-base text-black font-poppins font-normal">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-[30px] py-[42px]">
                        <FaPhone className="text-2xl"/>
                        <span>
                        <h3 className="text-2xl text-black font-poppins font-medium">Phone</h3>
                        <Link to={'tel:+(84) 546-6789'} className="w-[212px] text-base text-black font-poppins font-normal block">Mobile: +(84) 546-6789</Link>
                        <Link to={'tel:+(84) 456-6789'} className="w-[212px] text-base text-black font-poppins font-normal block">Hotline: +(84) 456-6789</Link>
                        </span>
                    </div>
                    <div className="flex items-baseline gap-[30px]">
                        <FaClock className="text-2xl"/>
                        <span>
                        <h3 className="text-2xl text-black font-poppins font-medium">Working Time</h3>
                        <p className="w-[212px] text-base text-black font-poppins font-normal">Monday-Friday: 9:00 - 22:00
                        Saturday-Sunday: 9:00 - 21:00</p>
                        </span>
                    </div>
                </div>

                <div className="px-13 ">
                    <InputBox title={'Abc'} placeholder={"Enter your name"}/>
                    <InputBox title={'Email address'} type="email" placeholder={"Enter your email"}/>
                    <InputBox title={'Subject'} placeholder={"This is an optional"}/>
                    
                    
                    <div className="pt-9">
                        <label className="text-base text-black font-poppins font-medium block pb-[22px]">Message</label>
                        <textarea name="" id="" placeholder="Hi! i’d like to ask about" className="w-[530px] pt-[25px] pb-[70px] px-8 border-[1px] border-[#9F9F9F] rounded-[10px] outline-none"></textarea>
                    </div>
                    <button className="py-[25px] px-[72px] bg-brandcolor inline-block text-base text-white font-bold font-poppins rounded-[5px] mt-12 cursor-pointer">Submit</button>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default WithUs