import { useContext } from "react";
import MealContext from "../../store/MealContext";
import MealItem from "./MealItem";
import style from "./MealList.module.css"

function MealList(){
    const mealCtx  = useContext(MealContext);
    return (
        <ul className={style.list}>
            {
                mealCtx.map(item => <MealItem mealData={item}  key={item.id} />)
            }
        </ul>
    )
}

export default MealList;