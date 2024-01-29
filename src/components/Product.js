import { useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { getProducts } from "../redux/productSlice";
import { StatusCode } from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  if (status === StatusCode.LOADING) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger" className="text-center">
        Something went wrong! Try again later
      </Alert>
    );
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-3 text-center"
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1 className="text-center">Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
