import { NavLink } from 'react-router';
import { mainNavLinks } from '@/components/navigation/dataSource.ts';
import styles from './Navigation.module.css';
import type { Dispatch, SetStateAction } from 'react';
import Logo from '@/components/logo/Logo.tsx';

type NavigationProps = {
    isNavVisible: boolean;
    setIsNavVisible: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({ isNavVisible, setIsNavVisible }: NavigationProps) => {
    const handleToggleNavVisibility = () => {
        setIsNavVisible((prevState) => !prevState);
    };

    return (
        <nav className={styles.nav}>
            <Logo />
            <ul
                className={`${styles.navList} ${isNavVisible && styles.showNav}`}
            >
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
