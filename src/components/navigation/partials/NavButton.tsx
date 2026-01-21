import styles from '../Navigation.module.css';

type NavButtonProps = {
    toggle: () => void;
    isVisible: boolean;
};

const NavButton = ({ toggle, isVisible }: NavButtonProps) => {
    return (
        <button
            onClick={toggle}
            aria-label="Toggle navigation links"
            className={`${isVisible ? styles.closeBtn : styles.openBtn}`}
        >
            <div></div>
            <div></div>
        </button>
    );
};

export default NavButton;
