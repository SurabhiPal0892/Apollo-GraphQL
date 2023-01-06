import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../styles/home.css";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/context";

export function Product({ prod, buttonName }) {
  const { cart, setCart } = useContext(CartContext);
  const [hideAdd,setHideAdd]=useState(false);
  const addToCart = (prod) => {
    const item = {
        title: prod.title,
        price: prod.price,
        id: prod.id,
        quantity: 1,
        thumbnail:prod.thumbnail
      };
      setCart([...cart, item]);
      setHideAdd(true)
       
  };
  const removeFromCart=(prod)=>{
    for (let [idx, item] of cart.entries()) {
        if (item.id === prod.id) {
            cart.splice(idx, 1);
          }
        }
      setCart([...cart]);
  }

  return (
    <div className="product__card" key={prod.id}>
      <img src={prod.thumbnail} />
      <div className="product__card__bottom">
        <span>{prod.title}</span>
        {
            hideAdd?<Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(prod)}>Remove from cart</Button>:<Button variant="primary" size="sm" onClick={() => addToCart(prod)}>
            Add to cart
          </Button>
        }
          
      </div>
    </div>
  );
}
