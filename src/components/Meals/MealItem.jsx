import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({mealData}) {
    
    const {id, title, desc, price} = mealData;

    
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
            <div>
                <MealItemForm mealData={mealData} />
            </div>
        </li>
    );
}

export default MealItem;