import { useContext } from 'react';
import {CartStateContext} from '../../store/CartContext';
import style from './CartButton.module.css';

function CartButton({onOpen}){
    const cartState = useContext(CartStateContext);
    console.log(cartState);
    return (
        <button className={style.badge} onClick={onOpen}>
            <div>Your Cart</div>
            <div className={style.count}>{cartState.cartLength}</div>
        </button>
    );
}

export default CartButton;