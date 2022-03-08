import style from './Input.module.css';

function Input({label, input, hasError, errorMessage="값이 올바르지 않습니다."}) {



    return (
        <div className={hasError ? `${style.input} ${style.error}` :`${style.input}`}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} />
            {hasError && <p className={style.errorMessage}>{errorMessage}</p>}
        </div>
    );
}

export default Input;