import React from 'react'

const InputBox = ({title,type='text',placeholder}) => {
  return (
    <div className='pt-9'>
        <label className='block text-base mb-[22px] text-black font-poppins font-medium'>{title}</label>

        <input type={type} 
        placeholder={placeholder}
        className='w-full px-2 py-4 border-[1px] border-[#9F9F9F] rounded-[10px] outline-none ' 
        />
    </div>
  )
}

export default InputBox