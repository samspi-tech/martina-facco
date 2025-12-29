import styles from './FormErrorMessage.module.css';

type FormErrorMessageProps = {
    error?: string;
};

const FormErrorMessage = ({ error }: FormErrorMessageProps) => {
    return (
        <small role="alert" className={styles.errorMessage}>
            {error}
        </small>
    );
};

export default FormErrorMessage;
