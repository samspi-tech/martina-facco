import { Outlet } from 'react-router';
import styles from './AppLayout.module.css';
import Navigation from '@/components/navigation/Navigation.tsx';
import Footer from '@/components/footer/Footer.tsx';
import { useState } from 'react';

const AppLayout = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <div className={styles.appLayout}>
            <Navigation
                isNavVisible={isNavVisible}
                setIsNavVisible={setIsNavVisible}
            />
            <main className={`${isNavVisible && styles.hideOverflow}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
