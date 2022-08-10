import {createSlice} from '@reduxjs/toolkit';

const productSlice=createSlice({
    name:'product',
    initialState:{
        product:null,
        isFetching:false,
        error:false,
    },
    reducers:{
       //Get All product
       getProductsStart:((state)=>{
        state.isFetching=true
        state.error=false
     }),
     getProductsSuccess:((state,actions)=>{
       state.isFetching=true
       state.product=actions.payload;
     }),
     getProductsFail:((state)=>{
       state.error=true
     }),

       //Delete product
       deleteProductStart:((state)=>{
        state.isFetching=true
        state.error=false
     }),
     deleteProductSuccess:((state,action)=>{
       state.isFetching=true
       state.product.slice(
        state.product.findIndex((item)=>item._id===action.payload),1
        );
     }),
     deleteProductFail:((state)=>{
       state.error=true
     }),

      //update product
      updateProductStart:((state)=>{
        state.isFetching=true
        state.error=false
     }),
     updateProductSuccess:((state,action)=>{
       state.isFetching=true
       state.product[
        state.product.findIndex((item)=>item._id===action.payload.id)
       ]=action.payload.product;
     }),
     updateProductFail:((state)=>{
       state.error=true
     }),
  
      //Creating New product
      createProductStart:((state)=>{
        state.isFetching=true
        state.error=false
     }),
      createProductSuccess:((state,action)=>{
       state.isFetching=true
       state.product.push(action.payload);
     }),
       createProductFail:((state)=>{
       state.error=true
     }),


    }
})

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFail,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFail,
  updateProductStart,
  updateProductSuccess,
  updateProductFail,
  createProductStart,
  createProductSuccess,
  createProductFail
} =productSlice.actions;
export default productSlice.reducer;