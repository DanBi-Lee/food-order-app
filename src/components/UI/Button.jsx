import style from './Button.module.css';

function Button ({onClick, text}){
    return <button className={style.button} onClick={onClick}>{text}</button>;
}

export default Button;