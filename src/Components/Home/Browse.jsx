import React from 'react'
import dining from '../../assets/Images/Dining.png'
import living from '../../assets/Images/Living.png'
import bed from '../../assets/Images/Bed.png'
import Commonhead from '../Common/Commonhead/Commonhead'

const Browse = () => {
  return (
    <>
      <section className='py-14'>
        <div className="container m-auto">
          <Commonhead commonheadh2={'Browse The Range'} commonheadp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
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