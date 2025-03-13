import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

const NextArrow = ({onClick}) => {
  return (
    <>
        <div
      onClick={onClick} className='h-12 w-12 rounded-full bg-white text-brandcolor text-xl flex justify-center items-center absolute top-1/2 right-0 translate-y-[-50%] '>
        <IoChevronForward/>
      </div>
    </>
  )
}

export default NextArrow