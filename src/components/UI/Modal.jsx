import style from './Modal.module.css';

function Modal({children}) {
    return (
        <div className={style.modalWrap}>
            <div className={style.modalOverlay}></div>
            <section className={style.modalcontentBox}>
                {/* {children} */}
                test
            </section>
        </div>
    );
}

export default Modal;