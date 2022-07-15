import React, { useState ,useEffect} from 'react'
import styled from "styled-components"
import { popularProducts } from '../Slider/data'
import Product from './Product'
import Axios from "axios";


const Container=styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
`

export default function Products({cat,Filter,sort}) {
  const [products,setProducts] =useState([]);
  const [filteredProduct,setFilteredProduct]=useState([]);

  useEffect(()=>{
     const getProduct=async ()=>{
        try{
           const res=await Axios.get(
            cat
            ?`http://localhost:3001/api/product?category=${cat}`
            : 'http://localhost:3001/api/product'
          );
          setProducts(res.data);
        }catch(err){
            
        }
     } 
     
     getProduct();
  },[cat]);

  useEffect(()=>{
      cat && setFilteredProduct(
        products.filter((item)=>Object.entries(Filter).every(([key,value])=>
        item[key].includes(value)
        ))
      ) ;    

  },[products,cat,Filter]);



  useEffect(()=>{
    if(sort==="neweast")
    {
      setFilteredProduct((prev)=>
      [...prev].sort((a,b)=>a.createdAt-b.createdAt));
    }
    else if(sort==="asc")
    {
      setFilteredProduct((prev)=>
      [...prev].sort((a,b)=>a.price-b.price));
    }
    else{
      setFilteredProduct((prev)=>
      [...prev].sort((a,b)=>b.price-a.price));
    }

  },[sort]);

    return (
      <Container>
            {cat ?filteredProduct.map((item)=>(
                <Product item={item}  key={item.id}/>
            ))
            :
            products.slice(0,8).map((item)=>(
                <Product item={item}  key={item.id}/>
            ))
            }
      </Container>
  )
}