import styles from './Hero.module.css';
import Button from '@/components/button/Button.tsx';
import { useNavigate } from 'react-router';

const Hero = () => {
    const navigate = useNavigate();

    const handleNavigateToAboutMe = () => {
        navigate('/about-me');
    };

    return (
        <header className={styles.hero}>
            <h1>
                Senior Art Director <span>&amp;</span> Graphic Designer
            </h1>
            <Button onClick={handleNavigateToAboutMe}>About me</Button>
        </header>
    );
};

export default Hero;
