import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <span role="status"></span>
        </div>
    );
};

export default Spinner;
