import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/choi5611/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  });
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div className="product-detail">{product?.title}</div>
          <div className="product-detail">{product?.price}</div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">사이즈 선택</Dropdown.Toggle>
          </Dropdown>
          <Button className="product-btn" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
