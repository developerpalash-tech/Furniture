import React from 'react'
import { Link } from 'react-router-dom'

const Cartbutton = ({title,path}) => {
  return (
    <>
        <Link to={path} className='h-fit py-[6px] px-[30px] border rounded-full border-black'>{title}</Link>
    </>
  )
}

export default Cartbutton