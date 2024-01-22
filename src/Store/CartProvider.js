import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
    item:[],
    totalAmount:0
}

const cartReducer =(state, action)=> {
    if(action.type === "ADD_MEAL"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = state.item.findIndex((item) => item.id === action.item.id);
        const exitstingItem = state.item[existingItemIndex];
        let updatedItems;
        let updatedItem;

        if(exitstingItem){
            updatedItem = {
                ...exitstingItem,
                amount:exitstingItem.amount + action.item.amount
            }
            updatedItems  = [...state.item];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else{
            updatedItems = [...state.item, action.item]
        }

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