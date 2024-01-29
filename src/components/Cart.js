import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const removeFromCart = (id) => {
    // dispatch the remove action
    dispatch(remove(id));
  };
  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-4 text-center"
      style={{ marginBottom: "10px" }}
    >
      <Card style={{ width: "18rem" }} className="h-100 m-auto">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "150px", width: "120px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>USD: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1 className="text-center">Cart</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
