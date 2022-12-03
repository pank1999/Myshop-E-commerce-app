import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Announcement'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Newsletter from '../Newsletter/Newsletter'
import Products from '../Products/Products'
import {mobile} from "../../respnsive";
import { useLocation } from 'react-router-dom'
import NewCategory from '../Categaries/NewCategory'


const Container=styled.div``


const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;
`
const Title=styled.h1`
margin:20px;
${mobile({margin:"5px",fontSize:"22px"})};
`
const FilterText=styled.span`
   font-size:20px;
   font-weight:600;
   margin-right:20px;
   ${mobile({fontSize:"18px"})};
`
const Select=styled.select`
padding:10px;
margin-right:20px;

${mobile({padding:"2px",marginRight:"18px"})};
`
const Option=styled.option`
padding:10px;
`

export default function ProductList() {

   const location=useLocation();
   const cat=location.pathname.split('/')[2];


   const [filters,setFilter]=useState({});
   const [sort,setSort]=useState('newest');

   const handleFilter=(e)=>{

       const value=e.target.value;
       setFilter({
         ...filters,
         [e.target.name]:value,
       });
   };
  
   

   const handleSort=(e)=>{
       setSort(e.target.value);
   }
   
  return (
     <Container>
          <Navbar/>
          <Announcement/>
          <FilterContainer>
             <Filter><FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilter}>
                    <Option>color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>green</Option>
                    <Option>red</Option>
                    <Option>yellow</Option>
                    <Option>orange</Option>
                </Select>
                <Select name='size' onChange={handleFilter}>
                    <Option>size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    
                </Select>
             </Filter>
             <Filter><FilterText>Sort Products</FilterText>
                 <Select onChange={handleSort}>
                    <Option value="Newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price(desc)</Option>
                    
                </Select>
             </Filter>
          </FilterContainer>
          <Title>{cat}</Title>
          <NewCategory/>
          <h2 style={{textAlign:"center",padding:"10px",backgroundColor:"coral"}}>Some top results for this categories</h2>
          <Products cat={cat} Filter={filters} sort={sort} />
          <Newsletter/>
          <Footer/>
     </Container>
  )
}
