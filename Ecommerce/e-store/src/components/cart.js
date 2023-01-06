import { CartContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import { Product } from "./product";
import { Card, Button } from "react-bootstrap";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const increaseQuantity = (prod) => {
    for (let item of cart) {
      if (item.id === prod.id) {
        prod.quantity++;
      }
    }
    setCart([...cart]);
  };
  const decreaseQuantity = (prod) => {
    for (let [idx, item] of cart.entries()) {
      if (item.id === prod.id) {
        if (prod.quantity > 1) {
          prod.quantity--;
        } else {
          cart.splice(idx, 1);
        }
      }
    }
    setCart([...cart]);
  };

  useEffect(() => {
    debugger;
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [total, cart]);

  return (
    <div className="cart__summary">
      <Card style={{ width: "30rem" }}>
        {cart.length > 0 ? (
          <>
            <Card.Header>Cart Summary</Card.Header>
            <Card.Body>
              {cart.map((prod) => {
                return (
                  <div key={prod.id} className="cart__items">
                    <div>
                    <img src={prod.thumbnail} className="cart__image" />
                        </div>
                    <div style={{width:150}}>
                      <p>Name: {prod.title}</p>
                      <p>Price: {prod.price}</p>
                      <p>Quantity: {prod.quantity}</p>
                    </div>
                    <div>
                      <Button
                        variant="success"
                        onClick={() => increaseQuantity(prod)}
                      >
                        +
                      </Button> &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => decreaseQuantity(prod)}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                );
              })}
              <p>Total : {total}</p>
              <Button variant="primary">Pay Now</Button>
            </Card.Body>
          </>
        ) : (
          <p>Cart is Empty !!</p>
        )}
      </Card>
    </div>
  );
}
