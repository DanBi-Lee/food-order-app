import CartButton from '../Cart/CartButton';
import style from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={style.headBox}>
            <div className={style.innerBox}>
                <h1>ReactMeals</h1>
                <CartButton />
            </div>
        </header>
    );
}

export default MainHeader;