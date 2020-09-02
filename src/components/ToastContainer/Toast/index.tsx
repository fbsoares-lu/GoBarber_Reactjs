import React, { useEffect } from 'react';
import {
    FiAlertCircle,
    FiCheckCircle,
    FiInfo,
    FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
    messages: ToastMessage;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ messages }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(messages.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [removeToast, messages.id]);

    return (
        <Container hasDescription={!!messages.description} type={messages.type}>
            {icons[messages.type || 'info']}
            <div>
                <strong>{messages.title}</strong>
                {messages.description && <p>{messages.description}</p>}
            </div>
            <button onClick={() => removeToast(messages.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    );
};

export default Toast;
