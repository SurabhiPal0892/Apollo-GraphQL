import {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext()
export const ProductsContext= createContext()
export const Context=({children})=>{
    const [cart,setCart]=useState([])
    const [products,setProducts]=useState([])
    return(
        <ProductsContext.Provider value={{products,setProducts}}>
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
        </ProductsContext.Provider>
    )
}