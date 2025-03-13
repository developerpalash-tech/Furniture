
import Details from '../Components/ProductDetails/Details'
import RelatedProduct from '../Components/ProductDetails/RelatedProduct'
import Description from '../Components/ProductDetails/Description'
import Breadcrumb from '../Components/Utilities/Breadcrumb'

const ProductDetails = () => {
  return (
    <section>
            <div className='py-8 bg-[#F9F1E7]'>
                <Breadcrumb/>
            </div>
            <Details/>
            <Description/>
            <RelatedProduct/>
    </section>
  )
}

export default ProductDetails