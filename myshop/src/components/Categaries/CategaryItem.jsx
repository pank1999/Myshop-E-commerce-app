import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Container=styled.div`
     flex:1;
     margin:5px;
     height:40vh;
     position:relative;
     
`;
const Img=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
   
`;

const Info=styled.div`
 position:absolute;
 width:100%;
 height:100%;
 top:0;
 left:0;
 justify-content:center;
 display:flex;
 align-items:center;
 flex-direction:column;

 `;

const Title=styled.h1`
   color:white;
   margin-bottom:20px;
`;

const Button=styled.button`
   border:none;
   padding:10px;
   background-color:white;
   color:gray;
   cursor:pointer;
   font-weight:600;
`;

export default function CategaryItem(props) {
  return (
     <Container>
        <Link to={`/products/${props.item.cat}`} >
           <Img src={props.item.img}/>
           <Info>
               <Title>{props.item.title}</Title>
               <Button>SHOP NOW</Button>
           </Info>
        </Link>   
     </Container>
    )
}
