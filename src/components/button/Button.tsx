import type { ComponentProps } from 'react';
import styles from './Button.module.css';

const Button = ({ ...props }: ComponentProps<'button'>) => {
    return <button className={styles.button} {...props} />;
};

export default Button;
