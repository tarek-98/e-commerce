import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
export default Products;
