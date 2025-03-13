
import CartTotal from '../Components/Cart/CartTotal'
import CommonBanner from '../Components/Common/CommonBanner'
import CommonQuality from '../Components/Common/CommonQuality'



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