import style from './Modal.module.css';

function Modal({children, isModal, onClose}) {
    if(isModal){
        return (
            <div className={style.modalWrap}>
                <div className={style.modalOverlay} onClick={onClose} ></div>
                <section className={style.modalcontentBox}>
                    {children}
                </section>
            </div>
        );
    }else {
        return '';
    }

}

export default Modal;