import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Title=styled.h2`
align-items: center;
text-align: center;
color: white;
padding:10px;
background-color:teal;
`;
const ActionContainer= styled.div`
margin-top:20px;
display: flex;
align-items: center;
justify-content: space-around;
`

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:20px;
`;
const Left = styled.div`
  flex: 1;
  justify-content:flex-end;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  height:100%;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color:#a6e7cd;
  border-radius:10px;
  margin-right:50px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding-top:20px;
  border-top:1px solid #black;
  width:100%;
`
const ItemLeft=styled.div`
flex:1;
font-weight: bold;
margin-left:100px;
`

const ItemRight=styled.div`
flex:1;
font-weight: bold;
`


export default function UserProfile() {
  const loggedInUser=useSelector(state=>state.user.currentUser.user);

  return (
    <>
    <Navbar/>
    <Title>
       User Profile
    </Title>
    <ActionContainer>
          <Button variant="contained" color="primary">Update</Button>
          <Button variant="contained" color="secondary">Logout</Button>
     </ActionContainer>
    <Container>
      <Left>
         <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="" style={{height:"400px",width:"400"}} />
      </Left>
      <Right>
        <ItemContainer>
          <ItemLeft>
               Username: 
          </ItemLeft>
          <ItemRight>
               {loggedInUser.userName}
          </ItemRight>
        </ItemContainer>
        <ItemContainer>
          <ItemLeft>
               Email: 
          </ItemLeft>
          <ItemRight>
               {loggedInUser.email}
          </ItemRight>
        </ItemContainer>
        <ItemContainer>
          <ItemLeft>
               DOB: 
          </ItemLeft>
          <ItemRight>
               {loggedInUser.dob}
          </ItemRight>
        </ItemContainer>
        <ItemContainer>
          <ItemLeft>
               Gender: 
          </ItemLeft>
          <ItemRight>
               {loggedInUser.gender}
          </ItemRight>
        </ItemContainer>
        
      </Right>
    </Container>
    </>
  );
}
