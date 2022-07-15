import React from 'react'
import styled from 'styled-components'
import {mobile} from "../../respnsive";

const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),url(https://whatsnewinpublishing.com/wp-content/uploads/2020/05/screen_2x-8-1.jpg) center;
display:flex;
justify-content:center;
align-items:center;

`
const Wrapper=styled.div`
 width:40%;
 padding:20px;
 background-color:white;
 ${mobile({padding:"30px",width:"74%"})};
`
const Title=styled.h1`
font-size:24px;
font-weight:300;
color:teal;
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
${mobile({padding:"12px"})};

`
const Button=styled.button`
width:40%;
border:none;
padding:10px;
background-color:teal;
color:white;
cursor:pointer;
${mobile({width:"100%"})};
`

const Aggrement=styled.span`
font-size:12px;
margin:20px 0px;
color:teal;

`


export default function Register() {
  return (
     <Container>
         <Wrapper>
             <Title>Create An Account</Title>
             <Form>
                 <Input  placeholder="First Name"/>
                 <Input  placeholder="Last Name"/>
                 <Input placeholder="Email" />
                 <Input placeholder="Username" />
                 <Input placeholder="Password" />
                 <Input placeholder="Confirm Password" />
                 <Aggrement>
                     I agree all the terms and conditions and the policies of the company
                 </Aggrement>
                 <Button>CREATE</Button>

             </Form>
         </Wrapper>
     </Container>
  )
}
