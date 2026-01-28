import styles from './ErrorMessage.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from '@/components/button/Button.tsx';

type ErrorMessageProps = {
    error: string;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    const handleReloadPage = () => {
        window.location.reload();
    };

    return (
        <div role="alert" className={styles.errorMessageContainer}>
            <div>
                <p>
                    <FaExclamationTriangle />
                    <span>Error &mdash; {error}</span>
                </p>
                <Button onClick={handleReloadPage} variant="secondary">
                    Try again
                </Button>
            </div>
        </div>
    );
};

export default ErrorMessage;
