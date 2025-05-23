// src/components/Toast.jsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            closeButton
            style={{
                top: '10vh',
                right: '1rem',
                left: 'unset',
                bottom: 'unset',
                fontSize: '0.75rem',
                width: '80vw',
                height: '8vh'
            }}
        />
    );
};

export default Toast;
