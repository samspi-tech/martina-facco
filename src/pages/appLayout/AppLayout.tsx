import { Outlet } from 'react-router';
import styles from './AppLayout.module.css';
import Navigation from '@/components/navigation/Navigation.tsx';
import Footer from '@/components/footer/Footer.tsx';

const AppLayout = () => {
    return (
        <div className={styles.appLayout}>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
