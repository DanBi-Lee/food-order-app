import { useContext } from 'react';
import { CartDispatchContext } from '../../store/CartContext';
import style from './CartItem.module.css';

function CartItem({cartData}){
    const cartDispatch = useContext(CartDispatchContext);
    const increaseCountHandler = (id) =>{
        cartDispatch({
            type: "INCREASE_COUNT",
            payload: id
        });
    };
    const decreaseCountHandler = (id) =>{
        cartDispatch({
            type: "DECREASE_COUNT",
            payload: id
        });
    };

    const {id, title, price, count} = cartData;
    return (
        <li className={style.item} data-id={id}>
            <div className={style.info}>
                <p className={style.title}>
                    {title}
                </p>
                <p className={style.price}>
                    {`${price.toLocaleString('ko-KR')}원`}
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