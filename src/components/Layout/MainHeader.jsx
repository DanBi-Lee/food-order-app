import style from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={style.headBox}>
            <div className={style.innerBox}>
                <h1>ReactMeals</h1>
                <div className={style.badge}>
                    <div>Your Cart</div>
                    <div className={style.count}>0</div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;