import { useContext } from 'react';
import {CartStateContext} from '../../store/CartContext';
import style from './CartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartButton({onOpen}){
    const cartState = useContext(CartStateContext);
    console.log(cartState);
    return (
        <button className={style.badge} onClick={onOpen}>
            <div>
                <FontAwesomeIcon icon={faCartShopping}/>
                 <span> Your Cart</span>
            </div>
            <div className={style.count}>{cartState.cartLength}</div>
        </button>
    );
}

export default CartButton;