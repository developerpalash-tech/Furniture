import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title,path}) => {
  return (
    <>
        <Link to={path} className='py-[25px] px-[72px] bg-brandcolor inline-block text-base text-white font-bold font-poppins'>{title}</Link>
    </>
  )
}

export default Button