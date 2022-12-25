import React from "react";
import styled from "styled-components";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../../respnsive";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
  margin: 0px;
  padding: 0px;

  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 25px;
  padding-left: 40%;
  ${mobile({ height: "15px", width: "70px", marginLeft: "0px" })};
`;

const SearchContainer = styled.div`
  border: 0.6px solid teal;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
  border-radius: 10px;
  width: 100%;
  ${mobile({ marginLeft: "0px", padding: "3px" })};
`;

const Center = styled.div`
  flex: 2;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "18px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: "5px" })};
`;

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.currentUser.user);
  console.log(loggedInUser);
  console.log(cart);
  const [searchValue, setSearchValue] = useState();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("name", searchValue);
    navigate(`/search/` + searchValue);
    // <Navigate to={`/search/` + searchValue} />;
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>Myshop.</Logo>
          </Link>
        </Left>
        <Center>
          <form onSubmit={handleSearchSubmit}>
            <SearchContainer>
              <Input
                placeholder="search you item here..."
                name="search"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </SearchContainer>
          </form>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Home</MenuItem>
          </Link>
          {!loggedInUser.isAdmin ? (
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Products</MenuItem>
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>Register</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <Badge
              badgeContent={cart.quantity}
              color="primary"
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          <Link to="/UserProfile">
            <AccountCircle
              color="primary"
              style={{
                marginLeft: "12px",
                cursor: "pointer",
                fontSize: "34px",
              }}
            />
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
