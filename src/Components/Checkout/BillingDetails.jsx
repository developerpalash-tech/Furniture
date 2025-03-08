import React from 'react'

const BillingDetails = () => {
  return (
    <section>
        <div className="container m-auto">
            <div className=" flex gap-[26px]">
                <div className="">
                    <h2 className='text-4xl text-black font-poppins font-semibold'>Billing details</h2>
            <div className="flex gap-[31px]">
                <div className="">
                    <h3 className='text-base text-black font-poppins font-medium'>First Name</h3>
                    <input type="text" className='w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                </div>
                <div className="">
                    <h3 className='text-base text-black font-poppins font-medium'>Last Name</h3>
                    <input type="text" className='w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                </div>
            </div>
            <h3 className='text-base text-black font-poppins font-medium'>Company Name (Optional)</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Country / Region</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Street address</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Town / City</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Province</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>ZIP code</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Phone</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />

            <h3 className='text-base text-black font-poppins font-medium'>Email address</h3>
            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] block' />

            <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' placeholder='Additional information' />
        </div>
        

        <div className="">
            <h3 className='text-2xl text-black font-poppins font-medium'>Product</h3>
            <p className='text-base text-[#9F9F9F] font-poppins font-normal'>Asgaard sofa<span className='text-[12px] text-[#000000] font-poppins font-medium pl-3'>X 1</span></p>
            <h3 className='text-base text-[#000000] font-poppins font-normal'>Subtotal</h3>
            <h3 className='text-base text-[#000000] font-poppins font-normal'>Total</h3>
        </div>
        </div>
        </div>
    </section>
  )
}

export default BillingDetails