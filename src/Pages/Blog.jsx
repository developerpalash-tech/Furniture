import { Link } from 'react-router-dom';
import blog1 from '../assets/Images/Blog_img1.png'
import blog2 from '../assets/Images/Blog_img2.png'
import blog3 from '../assets/Images/Blog_img3.png'
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import CommonBanner from '../Components/Common/CommonBanner';
import CommonQuality from '../Components/Common/CommonQuality';
import BlogComp from '../Components/Blog/BlogComp';
import { FiSearch } from "react-icons/fi";

const Blog = () => {
  return (
    <>
      <CommonBanner title={'Blog'}/>
      <section className='pt-[106px] pb-[54px]'>
        <div className="container m-auto">
          <div className="flex gap-8">
            <div className="w-8/12 flex flex-col gap-[54px]">
              <BlogComp img={blog1}/>
              <BlogComp img={blog2}/>
              <BlogComp img={blog3}/>
            </div>

            <div className="w-4/12 px-10">
              <div className=" relative">
                <input type="text" className='w-full h-[58px] border border-[#9F9F9F] rounded-[10px] outline-none px-2'/>
                <FiSearch className='text-2xl absolute top-[50%] translate-y-[-50%] right-2'/>
              </div>
              
              <div className="px-[30px] mt-11">
                <h3 className='text-2xl text-black font-poppins font-medium leading-[24px] mb-8 '>Categories</h3>
                <div className="flex justify-between mb-10 text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]">
                  <h4>Crafts</h4>
                  <p>2</p>
                </div>
                <div className="flex justify-between mb-10 text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]">
                  <h4>Design</h4>
                  <p>8</p>
                </div>
                <div className="flex justify-between mb-10 text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]">
                  <h4>Handmade</h4>
                  <p>7</p>
                </div>
                <div className="flex justify-between mb-10 text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]">
                  <h4>Interior</h4>
                  <p>1</p>
                </div>
                <div className="flex justify-between text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]">
                  <h4>Wood</h4>
                  <p>6</p>
                </div>
              

              <h3 className='text-2xl text-[#000000] font-poppins font-medium leading-[24px] pb-7 pt-14'>Recent Posts</h3>
              <div className="flex gap-3 items-center pb-10">
                <div className="">
                  <img src={blog1} alt="img" className='h-20 w-20 rounded-xl'/>
                </div>
                <div className="w-30">
                  <p className='text-[16px] text-[#000000] font-poppins font-normal leading-[16px] mb-[10px]'>Going all-in with millennial design</p>
                  <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px]'>03 Aug 2022</p>
                </div>
              </div>
              <div className="flex gap-3 items-center pb-10">
                <div className="">
                  <img src={blog1} alt="img" className='h-20 w-20 rounded-xl'/>
                </div>
                <div className="w-30">
                  <p className='text-[16px] text-[#000000] font-poppins font-normal leading-[16px] mb-[10px]'>Going all-in with millennial design</p>
                  <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px]'>03 Aug 2022</p>
                </div>
              </div>
              <div className="flex gap-3 items-center pb-10">
                <div className="">
                  <img src={blog1} alt="img" className='h-20 w-20 rounded-xl'/>
                </div>
                <div className="w-30">
                  <p className='text-[16px] text-[#000000] font-poppins font-normal leading-[16px] mb-[10px]'>Going all-in with millennial design</p>
                  <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px]'>03 Aug 2022</p>
                </div>
              </div>
              <div className="flex gap-3 items-center pb-10">
                <div className="">
                  <img src={blog1} alt="img" className='h-20 w-20 rounded-xl'/>
                </div>
                <div className="w-30">
                  <p className='text-[16px] text-[#000000] font-poppins font-normal leading-[16px] mb-[10px]'>Going all-in with millennial design</p>
                  <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px]'>03 Aug 2022</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={blog1} alt="img" className='h-20 w-20 rounded-xl'/>
                </div>
                <div className="w-30">
                  <p className='text-[16px] text-[#000000] font-poppins font-normal leading-[16px] mb-[10px]'>Going all-in with millennial design</p>
                  <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px]'>03 Aug 2022</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonQuality/>
    </>
  )
}

export default Blog