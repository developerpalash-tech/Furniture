import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate'
import ProductItems from '../ProductItems'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const Products = ({ itemsPerPage }) => {
   
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
console.log(currentItems)
   
  return (
    <section className='pt-12 pb-[85px]'>
        <div className="container m-auto">
            <div className="grid grid-cols-4 gap-8">
        {currentItems &&
          currentItems.map((item, i) => (
            <ProductItems key={i}/>
          ))}
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