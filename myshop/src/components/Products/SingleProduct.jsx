import {} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import { mobile } from "../../respnsive";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px 2px" })};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "40vh", width: "100%" })};
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.p`
  font-size: 40px;
  font-weight: 100;
  ${mobile({ fontSize: "30px" })};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ fontSize: "17px", marginRight: "15px" })};
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ padding: "0px" })};
`;
const Option = styled.option`
  padding: 10px;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  ${mobile({ margin: "10px" })};
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  cursor: pointer;
`;
const AmountContainer = styled.div`
  display: flex;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  ${mobile({ width: "25px", height: "25px" })};
`;
const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "90%" })};
`;

const Button = styled.button`
  height: 40px;
  background-color: teal;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  ${mobile({ padding: "7px", height: "36px" })};
`;

export default function SingleProduct() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("api/product/find/" + productId);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              {product.color?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  onClick={() => {
                    setColor(c);
                  }}
                />
              ))}
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((c) => (
                  <Option>{c}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircle onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddCircle onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
