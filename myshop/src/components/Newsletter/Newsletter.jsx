import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../../respnsive";

const Container=styled.div`
  height:60vh;
  background-color:#fab432;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  ${mobile({height:"50vh"})};

`
const Title=styled.h1`
font-size:60px;
${mobile({fontSize:"40px"})};
`
const Description=styled.p`
margin:20px;
font-size:24px;
${mobile({fontSize:"18px"})};
`
const Inputcontainer=styled.div`
  width:50%;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:space-between;
  ${mobile({width:"70%"})};
`
const Input=styled.input`
width:350px;
height:40px;
border:none;
padding-left:40%;
font-size:20px;
${mobile({paddingLeft:"0"})};
`
const Button=styled.button`
flex:1;
background-color:teal;
color:white;
border:none;
cursor:pointer;
`

export default function Newsletter() {
  return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates on your favorites product !</Description>
            <Inputcontainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </Inputcontainer>
        </Container>
  )
}
