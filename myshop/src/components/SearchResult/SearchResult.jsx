import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./SearchResult.css";
import { Favorite, ShoppingCartOutlined } from "@material-ui/icons";
export default function SearchResult() {
  const location = useLocation();
  const productName = location.pathname.split("/")[2];
  console.log(productName);
  const [searchResult, setSearchResult] = useState([{}]);
  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const res = await publicRequest.get(`product/search/` + productName);
        setSearchResult(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSearchResult();
  }, [productName]);

  return (
    <div>
      <Navbar />
      <div className="searchContainer">
        {searchResult.map((item) => (
          <div className="searchItem">
            <div className="left">
              <img src={item.img} alt="img" />
            </div>
            <div className="right">
              <div className="item">
                <p>Name</p>
                <p>{item.title}</p>
              </div>
              <div className="item">
                <p>Price</p>
                <p>{item.price}</p>
              </div>
              <div className="item">
                <p>Desc</p>
                <p>{item.desc}</p>
              </div>
              <div className="item">
                <p>Color</p>
                <p>{item.color}</p>
              </div>
              <div className="item">
                <Favorite style={{ fontSize: "30px", color: "red" }} />
              </div>
              <div className="item">
                <ShoppingCartOutlined
                  style={{ fontSize: "30px", color: "teal" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
