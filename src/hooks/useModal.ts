import { useRef } from 'react';

export const useModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleToggleModal = () => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (dialog.hasAttribute('open')) {
            dialog.close();
            document.body.style.overflow = 'visible';
        } else {
            dialog.showModal();
            document.body.style.overflow = 'hidden';
        }
    };

    return {
        dialogRef,
        handleToggleModal,
    };
};
