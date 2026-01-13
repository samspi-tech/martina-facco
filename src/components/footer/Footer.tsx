import styles from './Footer.module.css';
import { socialsList } from '@/components/footer/dataSource.ts';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>&copy;{currYear} Martina Facco. All rights reserved.</p>
            <ul>
                {socialsList.map((social) => {
                    const { id, icon, name, link } = social;
                    const Icon = icon;

                    return (
                        <li key={id}>
                            <a href={link} target="_blank" aria-label={name}>
                                <Icon />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
