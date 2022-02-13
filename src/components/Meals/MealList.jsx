import MealItem from "./MealItem";
import style from "./MealList.module.css"

const DUMMY_DATA = [
    {
        id: 1,
        title: '초밥',
        desc : '최고급 생선과 야채',
        price : 22000
    },
    {
        id:2,
        title: '족발',
        desc: '한국인에세 사랑받는 매운맛',
        price: 16000 
    },
    {
        id:3,
        title: '햄버거',
        desc: '패티 대신 버섯이 들어간 비건햄버거',
        price: 6000
    }
]

function MealList(){
    return (
        <ul className={style.list}>
            {
                DUMMY_DATA.map(item => <MealItem mealData={item}  key={item.id} />)
            }
        </ul>
    )
}

export default MealList;