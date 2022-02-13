import style from './CartButton.module.css';

function CartButton({onOpen}){
    return (
        <button className={style.badge} onClick={onOpen}>
            <div>Your Cart</div>
            <div className={style.count}>0</div>
        </button>
    );
}

export default CartButton;