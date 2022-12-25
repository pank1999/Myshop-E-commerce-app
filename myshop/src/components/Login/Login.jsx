import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { publicRequest } from "../../requestMethod";
import { mobile } from "../../respnsive";
import { Link, useNavigate } from "react-router-dom";

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
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ padding: "30px", width: "60%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: teal;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  ${mobile({ padding: "10px", margin: "26px 10px 3px 0px" })};
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  background-color: teal;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
  ${mobile({ width: "100%" })};
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching } = useSelector((state) => state.user);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("api/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };
  return (
    <Container>
      <h1 style={{ marginBottom: "50px" }}>E-commerce</h1>
      <Wrapper>
        <Title>Login to Account</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          <Link to="/register">
            <p>create account</p>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
