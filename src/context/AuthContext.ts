import { createContext } from 'react';

interface AuthContextData {
    name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // vamos deixar o objeto vazio

export default AuthContext;
