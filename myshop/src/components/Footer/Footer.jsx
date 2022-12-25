import {
  Email,
  Facebook,
  Instagram,
  PhoneAndroid,
  RoomOutlined,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../respnsive";

const Container = styled.div`
 display:flex;
 background-color:#eee;
 position:sticky;
 bottom=0;
 width:100%;
 ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  padding: 20px;
  flex: 1;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  color: teal;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
  ${mobile({ backgroundColor: "#eee" })};
`;
const ContactItem = styled.p`
  padding: 5px;
`;

const Logo = styled.h1`
  margin-left: 20px;
`;
const Desc = styled.p`
  font-sie: 20px;
  margin: 20px 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

const SocialIcon = styled.div`
  width: 30px;
  color: white;
  height: 30px;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>MyShop.</Logo>
        <Desc>
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </Desc>
        <SocialContainer>
          <SocialIcon color="#349eeb">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#eb348f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#34b4eb">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#eb3443">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Categaries</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Categaries</ListItem>
          <ListItem>Man Fashion</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Details</Title>
        <ContactItem>
          {" "}
          <RoomOutlined /> Address: 20,block B new Delhi
        </ContactItem>
        <ContactItem>
          <PhoneAndroid /> +91 8630211986
        </ContactItem>
        <ContactItem>
          <Email /> pankajneeraj541@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
}
