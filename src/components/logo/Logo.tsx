import styles from './Logo.module.css';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className={styles.logo}>
            <h2>
                <span>Martina</span>
                <span>Facco</span>
            </h2>
        </Link>
    );
};

export default Logo;
