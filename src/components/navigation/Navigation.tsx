import styles from './Navigation.module.css';
import NavLinks from '@/components/navigation/partials/NavLinks.tsx';
import { useState } from 'react';
import NavButton from '@/components/navigation/partials/NavButton.tsx';

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleNavVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <nav className={styles.nav}>
            <NavLinks isVisible={isVisible} setIsVisible={setIsVisible} />
            <NavButton
                isVisible={isVisible}
                toggle={handleToggleNavVisibility}
            />
        </nav>
    );
};

export default Navigation;
