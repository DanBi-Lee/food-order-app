import style from './CartItem.module.css';

function CartItem({cartData}){
    const {id, title, price, count} = cartData;
    return (
        <li className={style.item} data-id={id}>
            <div className={style.info}>
                <p className={style.title}>
                    {title}
                </p>
                <p className={style.price}>
                    {`${price.toLocaleString('ko-KR')}원`}
                </p>
                <p className={style.count}>
                    {`x${count}`}
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