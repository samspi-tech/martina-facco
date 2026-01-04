import { Toaster } from 'react-hot-toast';

const Toast = () => {
    const options = {
        duration: 5000,
        success: {
            style: {
                background: 'var(--white)',
            },
            iconTheme: {
                primary: 'var(--black)',
                secondary: 'var(--white)',
            },
        },
        error: {
            style: {
                background: 'var(--main)',
            },
            iconTheme: {
                primary: 'var(--black)',
                secondary: 'var(--main)',
            },
        },
        style: {
            fontWeight: '500',
            lineHeight: '1.5',
            borderRadius: '0',
            padding: '16px 24px',
            color: 'var(--black)',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
        },
    };

    return <Toaster position="top-center" toastOptions={options} />;
};

export default Toast;
