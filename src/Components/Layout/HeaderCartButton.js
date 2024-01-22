import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx)
    const totalAmountOfCartItems = cartCtx.items.reduce((currTotal, item)=>{
        return currTotal+item.amount; 
    },0)

 return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{totalAmountOfCartItems}</span>
    </button>
 )
};

export default HeaderCartButton;