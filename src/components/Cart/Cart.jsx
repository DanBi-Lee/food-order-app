import Button from "../UI/Button";
import style from "./Cart.module.css";
import CartList from "./CartList";

function Cart({onClose}) {
    return (
        <>
            <CartList />
            <div className={style.cartBox}>
                <div className={style.total}>
                    <p>총 합계</p>
                    <p>0원</p>
                </div>
                <div className={style.action}>
                    <Button text="Close" onClick={onClose}/>
                    <Button text="Order" onClick={() => {}}/>
                </div>
            </div>
        </>
    );
}

export default Cart;