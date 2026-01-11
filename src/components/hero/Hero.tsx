import styles from './Hero.module.css';
import Button from '@/components/button/Button.tsx';
import { useNavigate } from 'react-router';

const Hero = () => {
    const navigate = useNavigate();

    const handleNavigateToAboutMe = () => {
        navigate('/aboutMe');
    };

    return (
        <header className={styles.hero}>
            <h1>
                <span>Senior Art Director</span> <span>Graphic Designer</span>
            </h1>
            <Button onClick={handleNavigateToAboutMe}>About me</Button>
        </header>
    );
};

export default Hero;
