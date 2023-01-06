import { useEffect, useState,useContext } from "react";
import axios from "axios";
import '../styles/home.css'
import { Product } from "./product";
import { CartContext,ProductsContext } from "../context/context";

export function Products(){
    const { products, setProducts } = useContext(ProductsContext);

    const {cart,setCart}=useContext(CartContext)
    const getProducts = () => {
      return axios
        .get("https://dummyjson.com/products?limit=100")
        .then((products) => setProducts(products.data.products));
    };
    useEffect(() => {
      getProducts();
    }, []);
    return(
        <div className="products">
    {products.map((prod) => {
        return (

         <Product prod={prod} key={prod.id} />
        );
      })}      
    </div>
    )
}