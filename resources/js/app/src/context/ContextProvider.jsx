import { createContext, useState, useContext } from "react";

export const LoginContexto = createContext(null);

const ContextProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState(sessionStorage.getItem('TOKEN'));


    const _setToken = (token) => {
        setToken(token);
        if(token){
            //Session perde quando fecha navegador.
            sessionStorage.setItem('TOKEN', token);
        }
        else{
            sessionStorage.removeItem('TOKEN');
        }
    }

    const _setUser = (user) => {
        setUser(user)
        //sessionStorage.setItem('USER', user.name);
    }

    return(
        <LoginContexto.Provider value = {{
            _setToken, _setUser, user, token
         }}>
            {children}
         </LoginContexto.Provider>
    )
}

export default ContextProvider;

export const useLogin = () => {
    const contexto = useContext(LoginContexto);
    return contexto;
}
