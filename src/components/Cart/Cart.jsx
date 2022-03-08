import { useContext, useState } from "react";
import { CartStateContext } from "../../store/CartContext";
import OrderForm from "../Order/OrderForm";
import Button from "../UI/Button";
import style from "./Cart.module.css";
import CartList from "./CartList";

function Cart({onClose}) {
    const cartState = useContext(CartStateContext);
    const [orderHandler, setOrderHandler] = useState(()=>{
        return ()=>{
            alert("지금은 주문할 수 없습니다.");
        }
    });

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
                <OrderForm setOrderHandler={setOrderHandler} orderItem={cartState.items} />
                <div className={style.action}>
                    <Button text="Close" onClick={onClose}/>
                    <Button text="Order" onClick={orderHandler}/>
                </div>
            </div>
        </>
    );
}

export default Cart;