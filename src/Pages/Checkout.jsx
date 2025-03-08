import React from 'react'
import CommonBanner from '../Components/CommonBanner'
import CommonQuality from '../Components/CommonQuality'
import BillingDetails from '../Components/Checkout/BillingDetails'

const Checkout = () => {
  return (
    <>
      <CommonBanner/>
      <BillingDetails/>
      <CommonQuality/>
    </>
  )
}

export default Checkout