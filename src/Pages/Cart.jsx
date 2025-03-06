import React from 'react'
import CommonBanner from '../Components/CommonBanner'
import CartTotal from '../Components/Cart/CartTotal'

const Cart = () => {
  return (
    <>
        <CommonBanner title={"Cart"}/>
        <CartTotal/>
    </>
  )
}

export default Cart