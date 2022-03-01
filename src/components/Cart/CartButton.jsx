import { useContext, useEffect, useState } from 'react';
import {CartStateContext} from '../../store/CartContext';
import style from './CartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartButton({onOpen}){
    const cartState = useContext(CartStateContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    let btnClasses = `${style.badge} ${btnIsHighlighted && style.bump}`;

    const {totalAmount} = cartState
    useEffect(()=>{
        if(totalAmount === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        }
    },[totalAmount]);

    console.log(cartState);
    return (
        <button className={btnClasses} onClick={onOpen}>
            <div>
                <FontAwesomeIcon icon={faCartShopping}/>
                 <span> Your Cart</span>
            </div>
            <div className={style.count}>{cartState.totalAmount}</div>
        </button>
    );
}

export default CartButton;