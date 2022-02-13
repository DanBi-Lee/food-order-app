import style from './CartItem.module.css';

function CartItem(){
    return (
        <li className={style.item}>
            <div className={style.info}>
                <p className={style.title}>
                    초밥
                </p>
                <p className={style.price}>
                    가격
                </p>
                <p className={style.count}>
                    갯수
                </p>
            </div>
            <div className={style.action}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    );
}

export default CartItem;