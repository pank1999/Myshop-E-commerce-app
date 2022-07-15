import React from 'react'
import styled from "styled-components"
import {ShoppingCartOutlined , SearchOutlined, FavoriteBorderOutlined} from "@material-ui/icons"
import {mobile} from "../../respnsive";

import {Link} from "react-router-dom";


const Info=styled.div`
 opacity:0;
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 background-color:rbga(0,0,0,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:3;
  transition:all 0.5s ease;

`
 
const Container=styled.div`
   flex:1;
   margin:5px;
   min-width:280px;
   display:flex;
   height:350px;
   align-item:center;
   justify-content:center;
   background-color:#f5fbfd;
   position:relative;
   &:hover ${Info}{
    opacity:1;
  }

  ${mobile({height:"318px"})};
`
const Circle=styled.div`
  width:200px;
  height:200px;
  border-radius:50%;
  background-color:white;
  position:absolute;
  display:none;
 
`

const Img=styled.img`
height:90%;
width:90%;
z-index:2;
border-radius:100%;
margin-top:5%;
${mobile({height:"90%",width:"90%",borderRadius:"100%",marginTop:"5%"})};



`


const Icon=styled.div`
   
   width:40px;
   height:40px;
   border-radius:50%;
   background-color:white;
   display:flex;
  justify-content:center;
  align-items:center;
  margin:10px;
  cursor:pointer;


  &:hover{
    background-color:teal;
    transform:scale(1.1);
  }
`

export default function Product(props) {
  return (
      <Container>
            <Circle />
            <Img  src={props.item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${props.item._id}`}>
                        <SearchOutlined />
                    </Link>  
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
      </Container>
  )
}