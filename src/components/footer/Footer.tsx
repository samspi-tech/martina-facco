import styles from './Footer.module.css';
import { socialIcons } from '@/components/footer/dataSource.ts';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.iconsContainer}>
                {socialIcons.map((socialIcon) => {
                    const { id, icon, name, link } = socialIcon;
                    const Icon = icon;

                    return (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            aria-label={name}
                        >
                            <Icon />
                        </a>
                    );
                })}
            </div>
            <p>Copyright &copy; {currYear} &ndash; Martina Facco</p>
        </footer>
    );
};

export default Footer;
