import { Outlet } from 'react-router';
import styles from './AppLayout.module.css';
import Navigation from '@/components/navigation/Navigation.tsx';

const AppLayout = () => {
    return (
        <div className={styles.appLayout}>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default AppLayout;
