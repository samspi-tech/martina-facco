import styles from './Logo.module.css';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className={styles.logo}>
            <span>Martina</span>
            <span>Facco</span>
        </Link>
    );
};

export default Logo;
