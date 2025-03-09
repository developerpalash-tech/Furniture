import dot from '../../assets/Images/Ellipse_dot.png'

const BillingDetails = () => {
  return (
    <section className='pt-[63px] pb-[52px]'>
        <div className="container m-auto">
            <div className=" flex gap-[26px]">
                <div className="w-1/2 px-19 pb-18 pt-9 flex flex-col gap-9">
                        <h2 className='text-4xl text-black font-poppins font-semibold'>Billing details</h2>
                    <div className="flex gap-[31px]">
                        <div className="">
                            <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>First Name</h3>
                            <input type="text" className='w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                        </div>
                        <div className="">
                            <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Last Name</h3>
                            <input type="text" className='w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                        </div>
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Company Name (Optional)</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Country / Region</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Street address</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Town / City</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Province</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>ZIP code</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Phone</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' />
                    </div>
                    <div className="">
                    <h3 className='text-base text-black font-poppins font-medium mb-[22px]'>Email address</h3>
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] block' />
                    </div>
                    <div className="">
                    <input type="text" className='w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px]' placeholder='Additional information' />
                    </div>
                    </div>
            
                    <div className="w-1/2 flex justify-between py-[86px] px-[38px] ">
                        <div className="">
                            <div className="w-full flex justify-between pb-[33.5px]">
                                <div className="">
                                    <h3 className='text-2xl text-black font-poppins font-medium pb-4'>Product</h3>
                                    <p className='text-base text-[#9F9F9F] font-poppins font-normal'>Asgaard sofa<span className='text-[12px] text-[#000000] font-poppins font-medium pl-3'>X 1</span></p>
                                    <p className='text-base text-[#000000] font-poppins font-normal py-6'>Subtotal</p>
                                    <p className='text-base text-[#000000] font-poppins font-normal'>Total</p>
                                </div>
                                <div className="">
                                    <h3 className='text-2xl text-black font-poppins font-medium pb-4'>Subtotal</h3>
                                    <p className='text-base text-black font-poppins font-light'>BDT. 250,000.00</p>
                                    <p className='text-base text-[#000000] font-poppins font-normal py-6'>BDT. 250,000.00</p>
                                    <p className='text-base text-brandcolor font-poppins font-normal'>BDT. 250,000.00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-t-[1px] border-t-[#D9D9D9] pt-6">
                                <div className="">
                                    <img src={dot} alt="img" />
                                </div>
                                <h3 className='text-base text-black font-poppins font-normal'>Direct Bank Transfer</h3>
                            </div>
                            <p className='text-base text-[#9F9F9F] font-poppins font-light pt-3 pb-6'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className="flex gap-4 items-center pb-3">
                                <input type="radio" className='block' />
                                <p className='text-base text-[#9F9F9F] font-poppins font-medium'>Direct Bank Transfer</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="radio" className='block' />
                                <p className='text-base text-[#9F9F9F] font-poppins font-medium'>Cash On Delivery</p>
                            </div>
                            <p className='text-base text-black font-poppins font-light pt-6 pb-10'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span> .</p>
                            <button className='py-4 px-26 border-[1px] border-[#000000] rounded-[15px] m-auto block '>Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BillingDetails