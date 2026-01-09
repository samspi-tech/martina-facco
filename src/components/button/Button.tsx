import type { ComponentProps } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
    variant?: 'primary' | 'outlinePrimary';
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props} />
    );
};

export default Button;
