import styles from './Footer.module.css';
import { socialsList } from '@/components/footer/dataSource.ts';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <ul>
                {socialsList.map((social) => {
                    const { id, icon, name, link } = social;
                    const Icon = icon;

                    return (
                        <li>
                            <a
                                key={id}
                                href={link}
                                target="_blank"
                                aria-label={name}
                            >
                                <Icon />
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p>Copyright &copy; {currYear} &ndash; Martina Facco</p>
        </footer>
    );
};

export default Footer;
