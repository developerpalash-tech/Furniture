import React from 'react'

const Commonhead = ({commonheadh2,commonheadp}) => {
  return (
    <>
        <h2 className='text-center text-[32px] text-primarycolor font-bold font-poppins'>{commonheadh2}</h2>
        <p className='text-center text-[20px] text-[#666666] font-normal font-poppins'>{commonheadp}</p>
    </>
  )
}

export default Commonhead