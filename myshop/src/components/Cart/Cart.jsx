import { AddCircle, Favorite, RemoveCircle } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { mobile } from "../../respnsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const KEY =
  "pk_test_51LC4p1SEoWVQXACh7XxJvVpTX3lLhNNY5plbrJobtphGFU2GaJuAc9thMvurHorG7wkkfsd1tnwNtVOlO8iKS8Sd00kSqg9W3W";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "6px" })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "5px" })};
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({ padding: "6px", fontSize: "11px" })};
`;
const Bottom = styled.div`
  display: flex;

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Productdetails = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "120px" })};
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Pricedetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 500};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: teal;
//   border: none;
//   color: white;
//   font-weight: 600;
//   cursor: pointer;
// `;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(res);
        navigate("/Success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "teal", color: "white" }}
            >
              Continue shoping
            </Button>
          </Link>
          <Button variant="contained" color="secondary">
            Wishlist <Favorite style={{ fontSize: "20px" }} />
          </Button>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <Productdetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </Productdetails>
                <Pricedetails>
                  <ProductAmountContainer>
                    <AddCircle />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveCircle />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </Pricedetails>
              </Product>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="Myshop"
              image="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
              billingAddress
              shippingAddress
              description={`your total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
              >
                Checkout
              </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
