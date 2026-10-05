import {createContext,useContext, useReducer} from "react";
import type { ReactNode,Dispatch } from "react";
import type { CartItem } from "../types/cart";
import { CartReducer, type CartAction } from "./CartReducer";

type CartProviderProps ={
    children:ReactNode
}
type CartContextType={
    cart:CartItem[],
    dispatch:Dispatch<CartAction>
}
const CartContext=createContext<CartContextType|undefined>(undefined)
const CartProvider=({children}:CartProviderProps)=>{
    const[state,dispatch]=useReducer(CartReducer,{cart:[]})
    return(
        <CartContext.Provider value={{cart:state.cart,dispatch}}>{children}</CartContext.Provider>
    )
}
export default CartProvider

export const useCart=()=>{
    const context=useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used inside CartProvider");
    }
    return context
}