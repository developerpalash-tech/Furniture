import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import RelatedProduct from '../Components/ProductDetails/RelatedProduct'

const ProductDetails = () => {
  return (
    <section>
            <div className='py-8 bg-[#F9F1E7]'>
                <Breadcrumb/>
            </div>
            <RelatedProduct/>
    </section>
  )
}

export default ProductDetails