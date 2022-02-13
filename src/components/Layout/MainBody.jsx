import MealList from "../Meals/MealList";
import style from "./MainBody.module.css"

function MainBody(){
    return (
        <main className={style.container}>
            <h2 className={style.title}>Meal List</h2>
            <MealList />
        </main>
    )
}

export default MainBody;