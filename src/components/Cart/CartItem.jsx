import { useContext } from 'react';
import { CartDispatchContext } from '../../store/CartContext';
import style from './CartItem.module.css';

function CartItem({cartData}){
    const cartFunction = useContext(CartDispatchContext);
    const increaseCountHandler = (id) =>{
        cartFunction.addItemToCartHandler(id)
    };
    const decreaseCountHandler = (id) =>{
        cartFunction.removeItemToCartHandler(id);
    };

    const {id, title, price, count} = cartData;
    console.log(cartData);
    return (
        <li className={style.item} data-id={id}>
            <div className={style.info}>
                <p className={style.title}>
                    {title}
                </p>
                <p className={style.price}>
                    {`${price}원`}
                </p>
                <p className={style.count}>
                    {`x${count}`}
                </p>
            </div>
            <div className={style.action}>
                <button onClick={()=>decreaseCountHandler(id)}>-</button>
                <button onClick={()=>increaseCountHandler(id)}>+</button>
            </div>
        </li>
    );
}

export default CartItem;