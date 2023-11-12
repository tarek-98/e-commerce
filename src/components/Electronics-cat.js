import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchcElectro } from "../rtk/slices/electronics-slice";

function ElectronicsCat() {
  const products = useSelector((state) => state.electronics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcElectro());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card
                style={{
                  width: "18rem",
                  height: "30rem",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                <Card.Img
                  style={{
                    width: "250px",
                    height: "200px",
                    padding: "30px",
                  }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title style={{ height: "150px" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text>Price: {product.price} $</Card.Text>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Cart
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ElectronicsCat;
