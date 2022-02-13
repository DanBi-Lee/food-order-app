import style from './CartButton.module.css';

function CartButton(){
    return (
        <button className={style.badge}>
            <div>Your Cart</div>
            <div className={style.count}>0</div>
        </button>
    );
}

export default CartButton;