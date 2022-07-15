import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from "styled-components"
import { sliderItem } from './data';
import {mobile} from "../../respnsive";

const Container=styled.div`

    height:100vh;
    background-color:#fff7f7;
    display:flex;
    position:relative;
    background-color:#${props=>props.bg};

    ${mobile({display:"none"})};
`;

const Wraper=styled.div`
   height:100%;
   display:flex;
   transition:all 1.5s  ease;
   transform:translateX(${props=>props.sliderIndex*-100}vw);
   ${mobile({height:"50vh"})};
`;

const Slide=styled.div`
   display:flex;
   justify-content:center;
   height:105vh;
   width:100vw;
   overflow:hidden;
   ${mobile({width:"90vw"})};
`;
const ImageContainer=styled.div`
    height:100%;
    flex:2;
    width:100%;
    ${mobile({width:"105%"})};
`;

const Image=styled.img`
    height:87%;
    ${mobile({height:"50%"})};
`;
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
`;

const Title=styled.h1`
    font-size:70px;
`;
const Description=styled.p`
    margin:50px 0px;
    font-size:20px;
    letter-spacing:3px;
    font-weight:bold;
`;
const Button=styled.button`
      padding:10px;
      background-color:transparent;
      font-size:20px;
      cursor:pointer;
`;

const Arrow=styled.div`
   width:50px;
   height:50px;
   background-color:#fffff7;
   display:flex;
   align-items:center;
   border-radius:50%;
   justify-content:center;
   position:absolute;
   margin:auto;
   top:0;
   bottom:0;
   left:${props=>props.direction === 'Left' && "10px"};
   right:${props=>props.direction === 'Right' && "10px"};
   cursor:pointer;
   z-index:2;
`;

export default function Slider() {

    const  [sliderIndex,setSliderIndex]=useState(0);
    const handleClick=(direction)=>{
          if(direction === "Left")
            {
              setSliderIndex(sliderIndex>0?sliderIndex-1:2);
            } else
            {
              setSliderIndex(sliderIndex<2?sliderIndex+1:0);
            }
    };
  return (
     <Container>
            <Arrow direction="Left"  onClick={()=>handleClick("Left")}>
                   <ArrowLeftOutlined/>
            </Arrow>

            <Wraper sliderIndex={sliderIndex}>

                {sliderItem.map((item)=>(
                <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image  src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wraper>

            <Arrow direction="Right"  onClick={()=>handleClick("Right")}>
                   <ArrowRightOutlined/>
            </Arrow>

     </Container>
  )
}
