
import Details from '../Components/ProductDetails/Details'
import RelatedProduct from '../Components/ProductDetails/RelatedProduct'
import Description from '../Components/ProductDetails/Description'
import Breadcrumb from '../Components/Utilities/Breadcrumb'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { productData } from '../Components/API/Index'

const ProductDetails = () => {
  const [singleProduct , setsingleProduct]=useState([])
  const [relatedProductList, setRelatedProductList]=useState([])
  const param=useParams()
  
    useEffect(()=>{
        productData().then((res)=>{
          for(let item of res.data){
            if(item.id==param.id){
              setsingleProduct(item);
              for(let related of res.data){
                if(item.category.name==res.data.category.name){
                  setRelatedProductList((prev)=>[...prev,related])
                }
              }
            }
            
          }
          
          
        }).catch((err)=>{

        })
    },[])
    
  return (
    <section>
            <div className='py-8 bg-[#F9F1E7]'>
                <Breadcrumb/>
            </div>
            <Details data={singleProduct}/>
            <Description/>
            <RelatedProduct products={relatedProductList}/>
    </section>
  )
}

export default ProductDetails