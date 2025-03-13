
import BillingDetails from '../Components/Checkout/BillingDetails'
import CommonBanner from '../Components/Common/CommonBanner'
import CommonQuality from '../Components/Common/CommonQuality'

const Checkout = () => {
  return (
    <>
      <CommonBanner title={'Checkout'}/>
      <BillingDetails/>
      <CommonQuality/>
    </>
  )
}

export default Checkout