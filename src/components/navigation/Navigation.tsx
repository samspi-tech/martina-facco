import { NavLink } from 'react-router';
import { mainNavLinks } from '@/components/navigation/dataSource.ts';
import styles from './Navigation.module.css';
import { useState } from 'react';

const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleToggleNavVisibility = () => {
        setIsNavVisible((prevState) => !prevState);
    };

    return (
        <nav className={styles.nav}>
            <ul className={`${isNavVisible && styles.showNav}`}>
                {mainNavLinks.map((link) => (
                    <li key={link.id}>
                        <NavLink
                            to={link.path}
                            onClick={() => setIsNavVisible(false)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleToggleNavVisibility}
                className={`${isNavVisible ? styles.closeBtn : styles.openBtn}`}
            >
                <div></div>
                <div></div>
            </button>
        </nav>
    );
};

export default Navigation;
