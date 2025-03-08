import trophy from '../assets/Images/quality1.png'
import warrenty from '../assets/Images/quality2.png'
import shipping from '../assets/Images/quality3.png'
import support from '../assets/Images/quality4.png'

const CommonQuality = () => {
  return (
    <section className='py-[100px] bg-[#FAF3EA]'>
            <div className="container m-auto">
                <div className="flex justify-between items-center">
                    <div className="flex gap-[10px]">
                        <div className="">
                            <img src={trophy} alt="img" />
                        </div>
                        <div className="">
                            <h3 className='text-[25px] text-[#242424] font-poppins font-semibold leading-[37.5px]'>High Quality</h3>
                            <p className='text-[20px] text-[#898989] font-poppins font-medium leading-[30px]'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="">
                            <img src={warrenty} alt="img" />
                        </div>
                        <div className="">
                            <h3 className='text-[25px] text-[#242424] font-poppins font-semibold leading-[37.5px]'>Warranty Protection</h3>
                            <p className='text-[20px] text-[#898989] font-poppins font-medium leading-[30px]'>Over 2 years</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="">
                            <img src={shipping} alt="img" />
                        </div>
                        <div className="">
                            <h3 className='text-[25px] text-[#242424] font-poppins font-semibold leading-[37.5px]'>Free Shipping</h3>
                            <p className='text-[20px] text-[#898989] font-poppins font-medium leading-[30px]'>Order over 150 $</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="">
                            <img src={support} alt="img" />
                        </div>
                        <div className="">
                            <h3 className='text-[25px] text-[#242424] font-poppins font-semibold leading-[37.5px]'>24 / 7 Support</h3>
                            <p className='text-[20px] text-[#898989] font-poppins font-medium leading-[30px]'>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
  )
}

export default CommonQuality