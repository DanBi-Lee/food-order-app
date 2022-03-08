import { useRef, useEffect  } from 'react';
import useInput from '../../hooks/useInput';
import { postOrder } from '../../http/order';
import Input from '../UI/Input';
import style from './OrderForm.module.css';

function OrderForm({setOrderHandler, orderItem}) {
    const orderMethodRef = useRef();
    const checkNull = (value) => {
        return value !== '';
    };
    const checkEmail = (value) => {
        return value.includes("@");
    };
    const name =useInput(checkNull);
    const tel = useInput(checkNull);
    const email = useInput(checkEmail);
    const address = useInput(checkNull);
    const orderMethod = useInput(checkNull, orderMethodRef.value);



    useEffect(()=>{
        const formSubmit = () => {
            console.log(name.isValid, tel.isValid, email.isValid, address.isValid, orderMethod.isValid)
            if(name.isValid && tel.isValid && email.isValid && address.isValid && orderMethod.isValid){
                const order = {
                    name: name.value,
                    tel: tel.value,
                    email : email.value,
                    address: address.value,
                    orderMethod : orderMethod.value,
                    orderItem
                }
                const submitOrder = async()=>{
                    try {
                        await postOrder(JSON.stringify(order));
                        alert("주문에 성공했습니다.")
                    }catch(e){
                        alert(e);
                    }
                }
                submitOrder();
            }else {
                alert("주문에 실패했습니다.");
            }
        }
        setOrderHandler(()=>formSubmit);
    },[address.isValid, address.value, email.isValid, email.value, name.isValid, name.value, orderItem, orderMethod.isValid, orderMethod.value, setOrderHandler, tel.isValid, tel.value]);

    return (
        <>
            <h2 className={style.title}>주문서</h2>
            <form className={style.form}>
                <Input label="주문자명" input={{id: "name", name: "name", type :"text", value: name.value, onChange: name.onChange, onBlur: name.onBlur }} hasError={name.hasError} />
                <Input label="전화번호" input={{id: "tel", name: "tel", type :"tel", value: tel.value, onChange: tel.onChange, onBlur: tel.onBlur }} hasError={tel.hasError} />
                <Input label="이메일" input={{id: "email", name: "email", type :"email", valule: email.value, onChange: email.onChange, onBlur: email.onBlur }} hasError={email.hasError} />
                <Input label="배송 주소" input={{id: "address", name: "address", type :"text", value: address.value, onChange: address.onChange, onBlur: address.onBlur }} hasError={address.hasError} />
                <div>
                    <label htmlFor="orderMethod">
                        결제 방법
                    </label>
                    <select id="orderMethod" name="orderMethod" ref={orderMethodRef} onChange={orderMethod.onChange} onBlur={orderMethod.onBlur} >
                        <option value="depositWithoutBankBook">무통장 입금</option>
                        <option value="meetAndPay">만나서 결제</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default OrderForm;