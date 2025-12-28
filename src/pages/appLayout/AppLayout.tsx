import { Outlet } from 'react-router';
import styles from './AppLayout.module.css';

const AppLayout = () => {
    return (
        <div className={styles.appLayout}>
            <nav>Navigation</nav>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default AppLayout;
