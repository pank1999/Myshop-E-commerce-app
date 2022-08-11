import { publicRequest,userRequest } from "../requestMethod";

import {
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
 } from "./ProductRedux";
 
import {loginStart,loginFailure,loginSuccess,logout} from "./UserRedux";

import { getClientStart,
   getClientSuccess,
   getClientFailure,
   createClientStart,
   createClientSuccess,
   createClientFailure,
   deleteClientStart,
   deleteClientSuccess,
   deleteClientFailure } from "./ClientRedux";


export const getProducts =async (dispatch)=>{
   dispatch(getProductsStart());
   try{
      const res= await publicRequest.get("/product");
      console.log(res.data);
      dispatch(getProductsSuccess(res.data));
      
   }catch(err){
      dispatch(getProductsFail());
   }
}

export const deleteProducts =async (id,dispatch)=>{
   dispatch(deleteProductStart());
   try{
       const res= await userRequest.delete(`/product/${id}`);
        console.log(res.data);
      dispatch(deleteProductSuccess(id));
      
   }catch(err){
      dispatch(deleteProductFail());
   }
}

//update product
export const updateProducts =async (id,product,dispatch)=>{
   //console.log("update product called");
   dispatch(updateProductStart());
   try{
        const res= await userRequest.put(`/product/${id}`,product);
        console.log(res.data);
      dispatch(updateProductSuccess(id));
      
   }catch(err){
      dispatch(updateProductFail());
   }
}

//Create new Product
export const createProducts =async (product,dispatch)=>{
   dispatch(createProductStart());
   try{
       const res= await userRequest.post(`/product/`,product);
       console.log(res.data);
      dispatch(createProductSuccess(res.data));
      
   }catch(err){
      dispatch(createProductFail());
   }
}


export const login =async (dispatch,user)=>{
   dispatch(loginStart);
   try{
      const res= await publicRequest.post("/auth/login",user);
      console.log(res.data);
      dispatch(loginSuccess(res.data));
      
   }catch(err){
      dispatch(loginFailure());
   }
}

export const Logout=(dispatch)=>{
   console.log("logout");
    dispatch(logout());
}


//client apiscalls

 //getclient
export const getClients =async (dispatch)=>{
   console.log("calling getclients");
   dispatch(getClientStart());
   try{
      const res= await userRequest.get(`/user/?new=true`);
      console.log(res.data);
      dispatch(getClientSuccess(res.data));
      
   }catch(err){
      dispatch(getClientFailure());
   }
}
 //create client
export const createClient =async (dispatch,client)=>{
   dispatch((createClientStart));
   try{
      const res= await userRequest.post("/api/user",client);
      console.log(res.data);
      dispatch(createClientSuccess(res.data));
      
   }catch(err){
      dispatch(createClientFailure());
   }
}


//delete client 
export const deleteClient =async (dispatch,id)=>{
   dispatch((deleteClientStart));
   try{
      const res= await userRequest.delete(`/api/user/${id}`);
      console.log(res.data);
      dispatch(deleteClientSuccess(id));
      
   }catch(err){
      dispatch(deleteClientFailure());
   }
}