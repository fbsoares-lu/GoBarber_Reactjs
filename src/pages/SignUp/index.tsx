import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/Logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail inválido'),
                password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={LogoImg} alt="Go Barber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input icon={FiUser} name="nome" placeholder="Nome" />

                    <Input icon={FiMail} name="email" placeholder="E-mail" />

                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="/">
                    <FiArrowLeft />
                    Voltar para o login
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
