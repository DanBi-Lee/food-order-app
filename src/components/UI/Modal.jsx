import { createPortal } from 'react-dom';
import style from './Modal.module.css';

function Backdrop({onClose}) {
    return <div className={style.backdrop} onClick={onClose}></div>
}

function ModalOverlay({children}) {
    return (
        <div className={style.modal}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

const portalElement = document.getElementById("overlays");

function Modal({children, onClose}) {
    return (
        <>
            { createPortal(<Backdrop onClose={onClose} />, portalElement) }
            { createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement) }
        </>
    );
}

export default Modal;