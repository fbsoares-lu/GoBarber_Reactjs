import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/Logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="Go Barber" />
            <form>
                <h1>Faça seu login</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail" />

                <Input
                  icon={FiLock}
                  name="password"
                  type="password"
                  placeholder="Senha"
                />

                <Button type="submit">Entrar</Button>

                <a href="/">Esqueci minha senha</a>
            </form>

            <a href="/">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
