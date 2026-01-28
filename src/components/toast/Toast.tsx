import { Toaster } from 'react-hot-toast';

const Toast = () => {
    const options = {
        duration: 5000000,
        success: {
            style: {
                background: '#fff',
            },
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            },
        },
        error: {
            style: {
                background: 'var(--red)',
            },
            iconTheme: {
                primary: '#000',
                secondary: 'var(--red)',
            },
        },
        style: {
            color: '#000',
            lineHeight: '1.4',
            borderRadius: '0',
            padding: '1.6rem 2rem',
            fontFamily: 'Iter, sans-serif',
        },
    };

    return <Toaster position="top-center" toastOptions={options} />;
};

export default Toast;
