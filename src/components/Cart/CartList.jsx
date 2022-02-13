import { useContext } from "react";
import {CartStateContext} from "../../store/CartContext";
import CartItem from "./CartItem";

function CartList() {
    const cartState = useContext(CartStateContext);

    return (
        <ul>
            {
                cartState.cartList.map(item => <CartItem key={item.id} cartData={item} />)
            }
        </ul>
    )
}

export default CartList;