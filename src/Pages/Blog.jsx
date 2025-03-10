import { Link } from 'react-router-dom';
import CommonBanner from '../Components/CommonBanner'
import CommonQuality from '../Components/CommonQuality'
import blog1 from '../assets/Images/Blog_img1.png'
import blog2 from '../assets/Images/Blog_img2.png'
import blog3 from '../assets/Images/Blog_img3.png'
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <CommonBanner/>
      <section className='pt-[106px] pb-[54px]'>
        <div className="container m-auto">
          <div className="flex">
            <div className="w-8/12">
              <div className="">
                <img src={blog1} alt="img" className='w-full'/>
              </div>
              <div className="flex gap-9 pt-[17px]">
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Admin</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaCalendar/>
                  <h3 className=''>14 Oct 2022</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Wood</h3>
                </div>
              </div>
              <h2 className='text-3xl text-black font-poppins font-medium leading-[30px] pt-[15px] pb-3'>Going all-in with millennial design</h2>
              <p className='text-base text-[#9F9F9F] font-poppins font-normal leading-[24px] pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
              <Link to={'#'} className='text-base text-black font-poppins font-normal leading-[16px] border-b-[1px] border-b-black pb-3'>Read more</Link>
              <img src={blog2} alt="img" className='pt-[54px] pb-[17px] rounded-[10px] w-full'/>
              <div className="flex gap-9 pt-[17px]">
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Admin</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaCalendar/>
                  <h3 className=''>14 Oct 2022</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Handmade</h3>
                </div>
              </div>
              <h2 className='text-3xl text-black font-poppins font-medium leading-[30px] pt-[15px] pb-3'>Exploring new ways of decorating</h2>
              <p className='text-base text-[#9F9F9F] font-poppins font-normal leading-[24px] pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
              <Link to={'#'} className='text-base text-black font-poppins font-normal leading-[16px] border-b-[1px] border-b-black pb-3'>Read more</Link>
              <img src={blog3} alt="img" className='pt-[54px] pb-[17px] rounded-[10px] w-full'/>
              <div className="flex gap-9 pt-[17px]">
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Admin</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaCalendar/>
                  <h3 className=''>14 Oct 2022</h3>
                </div>
                <div className="flex items-center gap-2 text-base text-[#9F9F9F] font-normal font-poppins">
                  <FaUser/>
                  <h3 className=''>Wood</h3>
                </div>
              </div>
              <h2 className='text-3xl text-black font-poppins font-medium leading-[30px] pt-[15px] pb-3'>Exploring new ways of decorating</h2>
              <p className='text-base text-[#9F9F9F] font-poppins font-normal leading-[24px] pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum. </p>
              <Link to={'#'} className='text-base text-black font-poppins font-normal leading-[16px] border-b-[1px] border-b-black pb-3'>Read more</Link>
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