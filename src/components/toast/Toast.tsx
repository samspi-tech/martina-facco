import { Toaster } from 'react-hot-toast';

const Toast = () => {
    const options = {
        success: {
            duration: 5000,
            style: {
                color: 'var(--background)',
                background: 'var(--title)',
            },
            iconTheme: {
                primary: 'var(--background)',
                secondary: 'var(--title)',
            },
        },
        error: {
            duration: 5000,
            style: {
                color: 'var(--background)',
                background: 'var(--paragraph)',
            },
            iconTheme: {
                primary: 'var(--background)',
                secondary: 'var(--paragraph)',
            },
        },
        style: {
            fontWeight: '500',
            lineHeight: '1.5',
            borderRadius: '0',
            padding: '16px 24px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
        },
    };

    return <Toaster position="top-center" toastOptions={options} />;
};

export default Toast;
