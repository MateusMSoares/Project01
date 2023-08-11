// cria um contexto, onde ficara o usuario logado
import React, {createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); // Inicializa usuario como nulo
    const navigate = useNavigate();

    const login = (email, password) => {
        console.log("login", {email, password})
        
        if (email === "" && password === "") {
            setUser({id: "123"});
            navigate("/main")
        }else {
            navigate("/login")
        }
        
    }

    const logout = () => {
    }
    
    return(
        <AuthContext.Provider value = {{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}