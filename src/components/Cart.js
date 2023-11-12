import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deletFromCart } from "../rtk/slices/cart-slice";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totlaPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container className="py-5">
      <h1 className="mt-2">Welcom to Cart</h1>
      <h4>Total Price: {totlaPrice.toFixed(2)} $</h4>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
      <MDBTable responsive>
        <MDBTableHead>
          <tr style={{ textAlign: "center" }}>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {cart.map((product) => {
            return (
              <tr key={product.id} style={{ textAlign: "center" }}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deletFromCart(product))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </Container>
  );
}
export default Cart;
