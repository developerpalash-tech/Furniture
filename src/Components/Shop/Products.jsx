import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate'
import ProductItems from '../ProductItems'
import { productData } from '../API/Index';




const Products = ({ itemsPerPage }) => {
  const [productList , setProductList]=useState([])
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

    useEffect(()=>{
        productData().then((res)=>{
            setProductList(res.data);
        }).catch((err)=>{

        })
    },[])
   console.log(currentItems)
  return (
    <section className='pt-12 pb-[85px]'>
        <div className="container m-auto">
            <div className="grid grid-cols-4 gap-8">
        {currentItems &&
          currentItems.map((item) => <ProductItems key={item.key} palash={item}/>)}
            </div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='pagination flex justify-center gap-10 mt-10'
      />
        </div>
    </section>
  )
}

export default Products