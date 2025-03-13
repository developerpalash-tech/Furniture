import { Link } from 'react-router-dom';
import blog1 from '../assets/Images/Blog_img1.png'
import blog2 from '../assets/Images/Blog_img2.png'
import blog3 from '../assets/Images/Blog_img3.png'
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import CommonBanner from '../Components/Common/CommonBanner';
import CommonQuality from '../Components/Common/CommonQuality';
import BlogComp from '../Components/Blog/BlogComp';

const Blog = () => {
  return (
    <>
      <CommonBanner title={'Blog'}/>
      <section className='pt-[106px] pb-[54px]'>
        <div className="container m-auto">
          <div className="flex">
            <div className="w-8/12 flex flex-col gap-[54px]">
              <BlogComp img={blog1}/>
              <BlogComp img={blog2}/>
              <BlogComp img={blog3}/>
            </div>

            <div className="">
              <input type="text" className='border-[1px] border-[#9F9F9F] rounded-[10px]'/>
              {/* <h3 className='text-2xl text-black font-poppins font-medium leading-[24px]'>Categories</h3>
              <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Crafts<span className='pl-[191px]'>2</span></h4>
              <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Design<span className='pl-[191px]'>8</span></h4>
              <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Handmade<span className='pl-[191px]'>7</span></h4>
              <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Interior<span className='pl-[191px]'>1</span></h4>
              <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px]'>Wood<span className='pl-[191px]'>6</span></h4> */}
              <div className="flex justify-between">
                <h4 className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px] flex flex-col gap-3'><span>Wood</span><span>Interior</span><span>Handmade</span> </h4>
                <p className='text-base text-[#9F9F9F] font-poppins font-normal leading-[16px] flex flex-col gap-3'><span>1</span><span>2</span><span>3</span></p>
              </div>
              <h3 className='text-2xl text-[#000000] font-poppins font-medium leading-[24px]'>Recent Posts</h3>
            </div>
          </div>
        </div>
      </section>
      <CommonQuality/>
    </>
  )
}

export default Blog