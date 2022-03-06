import Input from '../UI/Input';
import style from './OrderForm.module.css';

function OrderForm() {
    return (
        <>
            <h2 className={style.title}>주문서</h2>
            <form className={style.form}>
                <Input label="주문자명" input={{id: "name", name: "name", type :"text" }} />
                <Input label="전화번호" input={{id: "tel", name: "tel", type :"tel" }} />
                <Input label="이메일" input={{id: "email", name: "email", type :"email" }} />
                <Input label="배송 주소" input={{id: "address", name: "address", type :"text" }} />
                <div>
                    <label htmlFor="orderMethod">
                        결제 방법
                    </label>
                    <select id="orderMethod" name="orderMethod">
                        <option>무통장 입금</option>
                        <option>만나서 결제</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default OrderForm;