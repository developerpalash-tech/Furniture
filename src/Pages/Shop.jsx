import React from 'react'
import Banner from '../Components/Shop/Banner'
import Filter from '../Components/Shop/Filter'
import Products from '../Components/Shop/Products'


const Shop = () => {
  return (
    <>
        <Banner/>
        <Filter/>
        <Products itemsPerPage={16}/>
    </>
  )
}

export default Shop