import { useState } from "react";
import { useEffect } from "react";
import { getMeals } from "../../http/mealList";
import MealItem from "./MealItem";
import style from "./MealList.module.css"

function MealList(){
    const [meals, setMeals] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect( ()=>{
        let getData;
        setIsLoading(true);
        try{
            getData = async () =>{
                const data = await getMeals();
                setMeals(data);
            }
        }catch(e){
            setError(e);
        }
        setIsLoading(false);
        getData();
    }, []);

    if(isLoading){
        return <div>로딩중...</div>
    }
    if(error) {
        return <div>에러가 발생했습니다.</div>
    }
    if(Object.keys(meals).length === 0){
        return <div>항목이 없습니다.</div>
    }

    return (
        <ul className={style.list}>
            {
                Object.keys(meals).map(id => <MealItem mealData={meals[id]}  key={meals[id].id} />)
            }
        </ul>
    )
}

export default MealList;