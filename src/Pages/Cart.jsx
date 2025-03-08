import React from 'react'
import CommonBanner from '../Components/CommonBanner'
import CartTotal from '../Components/Cart/CartTotal'
import CommonQuality from '../Components/CommonQuality'


const Cart = () => {
  return (
    <>
        <CommonBanner title={"Cart"}/>
        <CartTotal/>
        <CommonQuality/>
    </>
  )
}

export default Cart