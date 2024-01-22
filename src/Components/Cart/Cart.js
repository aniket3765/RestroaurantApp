import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {
            id:'1',
            name:'Puranpoli',
            price:22,
            amount:1
        }
    ].map(item => {
        return<li>{item.name}</li>
    })}</ul>


 return <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total amount</span>
        <span>22</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
 </Modal>
}

export default Cart;