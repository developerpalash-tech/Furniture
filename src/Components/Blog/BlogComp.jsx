// import blog1 from '../../assets/Images/Blog_img1.png'
import { FaCalendar, FaUser } from 'react-icons/fa6'


const BlogComp = ({img}) => {
  return (
    <div>
        <div className=" ">
            <img src={img} alt="img" className='w-full'/>
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
        
        <button className='text-base text-black font-poppins font-normal leading-[16px] border-b-[1px] border-b-black pb-3 cursor-pointer'>Read more</button>
    </div>
  )
}

export default BlogComp