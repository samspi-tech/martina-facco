import { type PropsWithChildren, type RefObject, useEffect } from 'react';
import styles from './Modal.module.css';
import { FaPlus } from 'react-icons/fa';

type ModalProps = {
    onToggle: () => void;
    ref: RefObject<HTMLDialogElement | null>;
};

const Modal = ({ children, ref, onToggle }: PropsWithChildren<ModalProps>) => {
    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;

        const handleCloseDialog = () => {
            document.body.style.overflow = 'visible';
        };

        dialog.addEventListener('close', handleCloseDialog);

        return () => dialog.removeEventListener('close', handleCloseDialog);
    }, [ref]);

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
