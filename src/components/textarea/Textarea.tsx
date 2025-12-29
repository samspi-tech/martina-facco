import styles from '../input/Input.module.css';
import FormErrorMessage from '@/components/formErrorMessage/FormErrorMessage.tsx';
import type { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
    id: string;
    label: string;
    error?: string;
}

const Textarea = ({ id, label, error, ...props }: TextareaProps) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...props} />
            {error && <FormErrorMessage error={error} />}
        </div>
    );
};

export default Textarea;
