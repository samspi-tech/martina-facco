import styles from './Input.module.css';
import type { ComponentProps } from 'react';
import FormErrorMessage from '@/components/formErrorMessage/FormErrorMessage.tsx';

interface InputProps extends ComponentProps<'input'> {
    id: string;
    label: string;
    error?: string;
    type: 'text' | 'email';
}

interface TextareaProps extends ComponentProps<'textarea'> {
    id: string;
    label: string;
    error?: string;
    type: 'textarea';
}

const Input = (props: InputProps | TextareaProps) => {
    const { id, label, type, error } = props;

    if (type === 'textarea') {
        return (
            <div className={styles.inputContainer}>
                <label htmlFor="message">Message</label>
                <textarea rows={5} {...props}></textarea>
                {error && <FormErrorMessage error={error} />}
            </div>
        );
    }

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input {...props} />
            {error && <FormErrorMessage error={error} />}
        </div>
    );
};

export default Input;
