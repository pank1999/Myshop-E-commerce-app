import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import { mobile } from "../../respnsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(https://whatsnewinpublishing.com/wp-content/uploads/2020/05/screen_2x-8-1.jpg)
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ padding: "30px", width: "74%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: teal;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  ${mobile({ padding: "12px" })};
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "100%" })};
`;

const Aggrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: teal;
`;

export default function Register() {
  const [userName, setUsername] = useState("");
  const [Name, setName] = useState("");
  const [DOB, setDOB] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const data = {
    userName,
    password,
    email,
    DOB,
    Name,
    isAdmin: false,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const register = async () => {
      try {
        const res = await publicRequest.post("api/auth/register", data);
        console.log(res.data);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    };
    register();
  };
  return (
    <Container>
      <h1 style={{ marginBottom: "50px" }}>E-commerce</h1>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder="Name"
            required="true"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Email"
            type="email"
            required="true"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="DOB"
            type="date"
            required="true"
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
          <Input
            placeholder="Username"
            required="true"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            required="true"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input placeholder="Confirm Password" type="password" />
          <Aggrement>
            I agree all the terms and conditions and the policies of the company
          </Aggrement>
          <Button type="submit" onClick={handleSubmit}>
            CREATE
          </Button>
          <Link to="/login">
            <p style={{ paddingLeft: "50px" }}>login to your account</p>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
