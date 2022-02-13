import CartButton from '../Cart/CartButton';
import style from './MainHeader.module.css';

function MainHeader({onOpen}) {
    return (
        <header className={style.headBox}>
            <div className={style.innerBox}>
                <h1>ReactMeals</h1>
                <CartButton onOpen={onOpen} />
            </div>
        </header>
    );
}

export default MainHeader;