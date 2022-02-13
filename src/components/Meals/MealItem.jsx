import { useContext, useState } from "react";
import { CartDispatchContext } from "../../store/CartContext";
import Button from "../UI/Button";
import style from "./MealItem.module.css";

function MealItem({mealData}) {
    const cartDispatch = useContext(CartDispatchContext);
    const {id, title, desc, price} = mealData;
    const [count, setCount] = useState(0);
    const changeCountHandler = (e) => {
        setCount(e.target.value);
    };
    const addCartHandler = () => {
        const cartItem = {
            id,
            title,
            desc,
            price,
            count: count*1
        }
        if(count<=0){
            alert('1개 이상 입력해야 합니다');
            return;
        }
        cartDispatch({
            type: 'ADD_CART',
            payload: cartItem
        });
    }
    
    return (
        <li data-id={id} className={style.item}>
            <div className={style.mealInfo}>
                <p className={style.title}>
                    {title}
                </p>
                <p className={style.desc}>
                    {desc}
                </p>
                <p className={style.price}>
                    {price.toLocaleString('ko-KR')}원
                </p>
            </div>
            <div className={style.paymentInfo}>
                <p>
                    <label htmlFor={`${count}-${id}`}>
                        Amount
                    </label>
                    <input type="number" name={`${count}-${id}`} id={`${count}-${id}`} min="0" value={count} onChange={changeCountHandler} />
                </p>
                <Button text="+ Add" onClick={addCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;