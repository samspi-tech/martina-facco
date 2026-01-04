import { Toaster } from 'react-hot-toast';

const Toast = () => {
    const options = {
        duration: 5000,
        success: {
            style: {
                background: 'var(--title)',
            },
            iconTheme: {
                primary: 'var(--background)',
                secondary: 'var(--title)',
            },
        },
        error: {
            style: {
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
            color: 'var(--background)',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
        },
    };

    return <Toaster position="top-center" toastOptions={options} />;
};

export default Toast;
