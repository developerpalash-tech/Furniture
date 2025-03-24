import { useSelector } from 'react-redux'
import dot from '../../assets/Images/Ellipse_dot.png'
import InputBox from '../LayOut/InputBox'
import SelectBox from '../Utilities/SelectBox'

const BillingDetails = () => {
    const productList=useSelector((state)=>state.productData.value)
    const totalPrice=productList.reduce((total, product)=>total+product.total,0)
  return (
    <section className='pt-[63px] pb-[52px]'>
        <div className="container m-auto">
            <div className=" flex gap-[26px]">
                <div className="w-3/5 px-[78px]">
                        <h2 className='text-4xl text-black font-poppins font-semibold'>Billing details</h2>
                    <div className="flex gap-8">
                        <InputBox title={'First Name'}/>
                        <InputBox title={'Last Name'}/>
                    </div>
                    <InputBox title={'Company Name (Optional)'}/>
                    <SelectBox title={'Country / Region'}/>
                    <InputBox title={'Street address'}/>
                    <InputBox title={'Town / City'}/>
                    <SelectBox title={'Province'}/>
                    <InputBox title={'ZIP code'} type='number'/>
                    <InputBox title={'Phone'} type='number'/>
                    <InputBox title={'Email address'} type='email'/>
                    <InputBox placeholder={'Additional information'}/>
                    </div>
            
                    <div className="w-2/5 flex justify-between py-[86px] px-[38px] ">
                        <div className="">
                            
                            <div className="w-full pb-[33.5px] border-b-[1px] border-b-[#D9D9D9] ">
                                <div className="flex justify-between">
                                    <p className='text-2xl text-black font-poppins font-medium pb-4'>Product</p>
                                    <p className='text-2xl text-black font-poppins font-medium pb-4'>Subtotal</p>
                                </div>
                                {
                                   productList.map((item)=>(
                                    <div key={item.key} className="flex justify-between">
                                        <p className='text-base text-[#9F9F9F] font-poppins font-normal'>{item?.title}<span className='text-[12px] text-[#000000] font-poppins font-medium pl-3'>X {item.quantity}</span></p>
                                        <p className='text-base text-black font-poppins font-light'>BDT. {item?.total}</p>
                                    </div>
                                   )) 
                                }
                                

                                <div className="flex justify-between">
                                    <p className='text-base text-[#000000] font-poppins font-normal py-6'>Subtotal</p>
                                    <p className='text-base text-[#000000] font-poppins font-normal py-6'>BDT. {totalPrice}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className='text-base text-[#000000] font-poppins font-normal'>Total</p>
                                    <p className='text-base text-brandcolor font-poppins font-normal'>BDT. {totalPrice}</p>
                                </div>

                                
                            </div>
                                
                            <h3 className='text-base text-black font-poppins font-normal pt-6'><span className='h-[14px] w-[14px] bg-black rounded-full inline-block mr-4'></span>Direct Bank Transfer</h3>
                            
                            <p className='text-base text-[#9F9F9F] font-poppins font-light pt-3 pb-6'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className="flex gap-4 items-center pb-3">
                                <input type="radio" id='bank' name='payment'/>
                                <label htmlFor="bank" className='text-base text-[#9F9F9F] font-poppins font-medium cursor-pointer'>Direct Bank Transfer</label>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input type="radio" id='cash' name='payment'/>
                                <label htmlFor="cash" className='text-base text-[#9F9F9F] font-poppins font-medium cursor-pointer'>Cash On Delivery</label>
                            </div>
                            
                            <p className='text-base text-black font-poppins font-light pt-6 pb-10'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span> .</p>
                            <button className='py-4 px-26 border-[1px] border-[#000000] rounded-[15px] m-auto block cursor-pointer'>Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BillingDetails