import { useState } from "react";
import Button from "../UI/Button";
import style from "./MealItem.module.css";

function MealItem({mealData}) {
    const {id, title, desc, price} = mealData;
    const [count, setCount] = useState(0);
    const changeCountHandler = (e) => {
        console.log(e.target.value);
        setCount(e.target.value);
    };
    const addCartHandler = () => {
        console.log("카트 추가");
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