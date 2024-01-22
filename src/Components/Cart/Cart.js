import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Store/CartContext';
import { useContext } from 'react';
import CartItem from './CartItem'; 

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const cartItems =<ul className={classes["cart-items"]}>{cartCtx.items.map((item) => <CartItem id={item.id} name={item.name} price={item.price} amount={item.amount}></CartItem>)}</ul>
        
    

 return <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
 </Modal>
}

export default Cart;