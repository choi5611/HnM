import React, { useEffect, useState } from "react";
import ProductCard from "./../component/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/choi5611/hnm/products?q=${searchQuery}`;
    //찾고자 하는 물품을 검색하면 어떻게 찾는건가?
    //json-server에서 자동으로 제공해주는 기능
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col md={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
