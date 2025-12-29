import Hero from '@/components/hero/Hero.tsx';
import styles from './Homepage.module.css';

const Homepage = () => {
    return (
        <>
            <div className={styles.homepageBackground}></div>
            <Hero />
        </>
    );
};

export default Homepage;
