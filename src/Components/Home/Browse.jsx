import React from 'react'
import dining from '../../assets/Images/Dining.png'
import living from '../../assets/Images/Living.png'
import bed from '../../assets/Images/Bed.png'

const Browse = () => {
  return (
    <>
      <section className='py-14'>
        <div className="container m-auto">
          <h2 className='text-center text-[32px] text-primarycolor font-bold font-poppins'>Browse The Range</h2>
          <p className='text-center text-[20px] text-[#666666] font-normal font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between gap-5 mt-15">
            <div className="w-1/3">
              <img src={dining} alt="dining" className='w-full' />
              <p className='text-2xl text-primarycolor font-poppins font-semibold text-center mt-[30px]'>Dining</p>
            </div>
            <div className="w-1/3">
              <img src={living} alt="dining" className='w-full' />
              <p className='text-2xl text-primarycolor font-poppins font-semibold text-center mt-[30px]'>Living</p>
            </div>
            <div className="w-1/3">
              <img src={bed} alt="dining" className='w-full' />
              <p className='text-2xl text-primarycolor font-poppins font-semibold text-center mt-[30px]'>Bedroom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Browse