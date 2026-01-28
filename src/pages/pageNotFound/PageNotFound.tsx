import styles from './PageNotFound.module.css';
import Button from '@/components/button/Button.tsx';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/', { replace: true });
    };

    return (
        <>
            <title>404 &#124; Page Not Found &mdash; Martina Facco</title>
            <div className={styles.pageNotFound}>
                <h1>
                    <span>404</span>
                    <span>
                        The page you were looking for could not be found
                    </span>
                </h1>
                <Button variant="secondary" onClick={handleNavigateHome}>
                    Home
                </Button>
            </div>
        </>
    );
};

export default PageNotFound;
