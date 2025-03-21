import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: JSON.parse(localStorage.getItem('productData'))?JSON.parse(localStorage.getItem('productData')): []
},
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload)
      localStorage.setItem('productData', JSON.stringify(state.value))
    },
    removeFromCard: (state, action) => {
      state.value=state.value.filter((item)=>item.id!==action.payload)
      localStorage.setItem('productData', JSON.stringify(state.value))
    }
  }
})


export const { addToCart,removeFromCard} = productSlice.actions

export default productSlice.reducer