import type { PropsWithChildren, RefObject } from 'react';
import styles from './Modal.module.css';
import { FaPlus } from 'react-icons/fa';

type ModalProps = {
    onToggle: () => void;
    ref: RefObject<HTMLDialogElement | null>;
};

const Modal = ({ children, ref, onToggle }: PropsWithChildren<ModalProps>) => {
    return (
        <dialog ref={ref} className={styles.modal}>
            <button aria-label="Close modal" onClick={onToggle}>
                <FaPlus />
            </button>
            {children}
        </dialog>
    );
};

export default Modal;
