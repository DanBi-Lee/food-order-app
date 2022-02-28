import { useContext } from "react";
import { CartStateContext } from "../../store/CartContext";
import Button from "../UI/Button";
import style from "./Cart.module.css";
import CartList from "./CartList";

function Cart({onClose}) {
    const cartState = useContext(CartStateContext);

    if(cartState.cartLength===0){
        return (
        <div>
            장바구니가 비어있습니다.
        </div>
        );
    }


    let totalPrice = 0;
    cartState.items.forEach(item => {
        totalPrice += item.price*item.count;
    });

    return (
        <>
            <CartList />
            <div className={style.cartBox}>
                <div className={style.total}>
                    <p>총 합계</p>
                    <p>{totalPrice.toLocaleString('ko-KR')}원</p>
                </div>
                <div className={style.action}>
                    <Button text="Close" onClick={onClose}/>
                    <Button text="Order" onClick={() => {alert('주문을 성공했습니다.'); onClose();}}/>
                </div>
            </div>
        </>
    );
}

export default Cart;