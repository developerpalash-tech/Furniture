import React, { useState } from 'react'
import ProductSlide from "product-slide";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";


const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const Details = () => {
  const [selectOption,setselectOption]=useState("")
  const [selectColor,setselectColor]=useState("")
  const [quantity,setQuantity]=useState(1)
  const settings = {
    direction: "vertical", // or "horizontal"
    zoom: true,          // or false
  };
  return (
    <section className='pt-[55px] pb-[104px]'>
        <div className="container m-auto">
          <div className="flex gap-20">
            <div className="w-[423px]">
              <ProductSlide settings={settings} api={API.images} />
            </div>
            <div className="">
              <h2 className='text-[42px] text-black font-poppins font-normal leading-[42px]'>Asgaard sofa</h2>
              <p className='text-2xl text-[#9F9F9F] font-poppins font-medium leading-[24px] pt-2.5 pb-4'>BDT. 250,000.00</p>
              <div className="flex gap-[18px] items-center">
                <ul className='flex gap-[6px]'>
                  <li className='text-[#FFC700] text-xl'><FaStar/></li>
                  <li className='text-[#FFC700] text-xl'><FaStar/></li>
                  <li className='text-[#FFC700] text-xl'><FaStar/></li>
                  <li className='text-[#FFC700] text-xl'><FaStar/></li>
                  <li className='text-[#FFC700] text-xl'><FaStarHalf/></li>
                </ul>
                <p className='text-[13px] text-[#9F9F9F] font-poppins font-normal leading-[13px] border-l-[1px] border-l-[#9F9F9F] pl-[22px]'>5 Customer Review</p>
              </div>
              <p className='text-[13px] text-black font-poppins font-normal leading-[13px] pt-[18px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
              <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px] pt-[22px] pb-[12px]'>Size</p>
              <div className="flex gap-4">
                <label htmlFor="L" className={`h-8 w-8 ${selectOption==="L"? "bg-[#B88E2F]":"bg-[#F9F1E7]"}  rounded-[5px] cursor-pointer flex justify-center items-center`}>
                  L
                  <input type="radio" id='L' name='size' value={'L'} onChange={(e)=>setselectOption(e.target.value)} className='hidden'/>
                </label>
                <label htmlFor="XL" className={`h-8 w-8 ${selectOption==="XL"? "bg-[#B88E2F]":"bg-[#F9F1E7]"}  rounded-[5px] cursor-pointer flex justify-center items-center`}>
                  XL
                  <input type="radio" id='XL' name='size' value={'XL'} onChange={(e)=>setselectOption(e.target.value)} className='hidden'/>
                </label>
                <label htmlFor="XS" className={`h-8 w-8 ${selectOption==="XS"? "bg-[#B88E2F]":"bg-[#F9F1E7]"}  rounded-[5px] cursor-pointer flex justify-center items-center`}>
                  XS
                  <input type="radio" id='XS' name='size' value={'XS'} onChange={(e)=>setselectOption(e.target.value)} className='hidden'/>
                </label>
              </div>
              <p className='text-[14px] text-[#9F9F9F] font-poppins font-normal leading-[14px] pt-[22px] pb-[12px]'>Color</p>
              <div className="flex gap-4 pb-8">
                <label htmlFor="Violet" className={`h-8 w-8 rounded-full cursor-pointer ${selectColor==="Violet"&&"scale-125"}`} style={{background:"#816DFA"}}>
                  
                  <input type="radio" id='Violet' name='color' value={'Violet'} onChange={(e)=>setselectColor(e.target.value)} className='hidden'/>
                </label>
                <label htmlFor="Black" className={`h-8 w-8 rounded-full cursor-pointer ${selectColor==="Black"&&"scale-125"}`} style={{background:"#000000"}}>
                  
                  <input type="radio" id='Black' name='color' value={'Black'} onChange={(e)=>setselectColor(e.target.value)} className='hidden'/>
                </label>
                <label htmlFor="Yellow" className={`h-8 w-8 rounded-full cursor-pointer ${selectColor==="Yellow"&&"scale-125"}`} style={{background:"#B88E2F"}}>
                  
                  <input type="radio" id='Yellow' name='color' value={'Yellow'} onChange={(e)=>setselectColor(e.target.value)} className='hidden'/>
                </label>
              </div>
              <div className="flex gap-[18px] items-center">
                <div className="flex items-center gap-9 text-xl border-[1px] border-[#9F9F9F] w-fit p-4 rounded-xl">
                  <button onClick={()=>{quantity>1 && setQuantity(quantity-1)}}>-</button>
                  <p>{quantity}</p>
                  <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                <button className='py-4 px-12 border-[1px] border-[#000000] rounded-2xl'>Add To Cart</button>
                <button className='py-4 px-12 border-[1px] border-[#000000] rounded-2xl'>+ Compare</button>
              </div>
            </div>
          </div>
              

              
            
          
        </div>
    </section>
  )
}

export default Details