import { NavLink } from 'react-router';
import { mainNavLinks } from '@/components/navigation/dataSource.ts';
import { type Dispatch, type SetStateAction, useEffect } from 'react';
import styles from '../Navigation.module.css';

type NavLinksProps = {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const NavLinks = ({ isVisible, setIsVisible }: NavLinksProps) => {
    useEffect(() => {
        if (isVisible) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isVisible]);

    return (
        <ul className={`${styles.navList} ${isVisible && styles.showNav}`}>
            {mainNavLinks.map((link) => (
                <li key={link.id}>
                    <NavLink to={link.path} onClick={() => setIsVisible(false)}>
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
