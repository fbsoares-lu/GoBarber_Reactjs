import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface AuthState {
    token: string;
    user: object; // nao vou passar todas as propriedades do usuário, pois caso haja alguma mudança no backend
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn(credencials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // vamos deixar o objeto vazio

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        // vamos executar tudo isso da segunda vez... ou refresh na página
        /**
         * Quero preencher essa variável com o token e user, se nao, com o valor vazio
         */
        const token = localStorage.getItem('@GoBarber:token'); // o getItem vai pegar os valores se existente
        const user = localStorage.getItem('@GoBarber:user');

        if (token && user) {
            // se existe informação de token e existe de usuário eu retorno a informação
            return { token, user: JSON.parse(user) }; // parse para transafomar de volta para em OBJETO
        }

        // se nao encontrou nada, devo retornar objeto vazio
        return {} as AuthState; // para forçar a inicializaçao vazia
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user)); // converter em STRING
        // depois disso, preciso armazenar em algum local
        // salvar via contexto, para quando for passar as info. para todos os meus componentes

        setData({ token, user });
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
