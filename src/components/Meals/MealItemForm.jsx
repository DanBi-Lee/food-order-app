import {useContext, useState} from "react";
import {CartDispatchContext} from "../../store/CartContext";
import Button from "../UI/Button";
import Input from "../UI/Input";
import style from "./MealItemForm.module.css";

function MealItemForm({mealData}) {
    const cartHandler = useContext(CartDispatchContext);
    const {id, title, desc, price} = mealData;
    const [count,
        setCount] = useState(0);
    const changeCountHandler = (e) => {
        setCount(e.target.value);
    };
    const addCartHandler = (e) => {
        e.preventDefault();
        const cartItem = {
            id,
            title,
            desc,
            price,
            count: count*1
        }
        if (count <= 0) {
            alert('1개 이상 입력해야 합니다');
            return;
        }
        cartHandler.addItemToCartHandler(cartItem);
    }
    return (
        <form className={style.paymentInfo}>
            <Input
                label="Amount"
                input={{
                id : `acount-${id}`,
                min: 0,
                max: 5,
                step: 1,
                defaultValue: count,
                onChange: changeCountHandler,
                type: "number"
            }}/>
            <Button text="+ Add" onClick={addCartHandler}/>
        </form>
    );
}

export default MealItemForm;