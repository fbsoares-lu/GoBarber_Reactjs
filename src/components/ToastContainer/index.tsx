import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
    message: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ message }) => {
    return (
        <Container>
            {message.map(messages => (
                <Toast key={messages.id} messages={messages} />
            ))}
        </Container>
    );
};

export default ToastContainer;
