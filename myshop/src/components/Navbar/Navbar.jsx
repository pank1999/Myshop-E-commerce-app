import React from 'react'
import styled from 'styled-components'
import {AccountCircle, Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import {mobile} from "../../respnsive";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';




const Container=styled.div`
     height:60px;
     margin:0px;
     padding:0px;
     
     ${mobile({height:"50px"})};
`;

const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
`;
const Left=styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;

const Language=styled.span`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:"none"})};
`;

const Input=styled.input`
border:none;
width:100%;
height:25px;
${mobile({height:"15px",width:"70px",marginLeft:"0px"})};
`;

const SearchContainer=styled.div`
border:0.6px solid teal;
display:flex;
align-items:center;
margin-left:25px;
padding:3px;
width:60%;
${mobile({marginLeft:"0px",padding:'3px'})};
`;

const Center=styled.div`
  flex:1;
`;
const Logo=styled.h1`
  font-weight:bold;
  text-align:center;
  ${mobile({fontSize:"18px"})};
`;
const Right=styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({marginLeft:"5px"})};
`;

export default function Navbar() {

  const cart=useSelector(state=>state.cart);
  console.log(cart);

  return (
    <Container>
         <Wrapper>
             
             <Left>
                 <Language>EN</Language>
                 <SearchContainer>
                      
                    <Input placeholder="search" />   
                    <Search  style={{color:"teal",fontSize:"20px",marginLeft:"10px",cursor:"pointer"}}/>
                 </SearchContainer>
             </Left>
             <Center>
                 <Logo>
                     Myshop.
                 </Logo>
             </Center>
             <Right>
                 <Link to="/" style={{textDecoration:'none'}}><MenuItem>Home</MenuItem></Link>
                 <Link to="/register" style={{textDecoration:'none'}}><MenuItem>Register</MenuItem></Link>
                 <Link to="/login" style={{textDecoration:'none'}}><MenuItem>SIGN IN</MenuItem></Link>
 
                <Link to='/cart'>
                    
                    <Badge badgeContent={cart.quantity} color="primary" style={{marginLeft:"10px",cursor:"pointer"}}>
                      <ShoppingCartOutlined />
                    </Badge>
                 </Link>
                 <AccountCircle color="primary" style={{marginLeft:"12px",cursor:"pointer",fontSize:"34px"}}/>

             </Right>

         </Wrapper>
    </Container>
  )
}
