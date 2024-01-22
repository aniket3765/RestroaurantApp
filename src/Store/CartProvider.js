import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
    item:[],
    totalAmount:0
}

const cartReducer =(state, action)=> {
    if(action.type === "ADD_MEAL"){
    const updatedItems = [...state.item, action.item]
        const updatedTotalAmount = state.totalAmount + action.item.amount;
        return {item:updatedItems, totalAmount:updatedTotalAmount}
    }    
     
};

const CartProvider = props => {

   const[cartState, dispatchCart] =  useReducer(cartReducer, defaultCartState)

    const addItemtoCartHandler = item => {
        dispatchCart({type:"ADD_MEAL", item:item})  
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({type:"RMOVE_MEAL", id:id})
    };

    const cartContext = {
        items:cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider