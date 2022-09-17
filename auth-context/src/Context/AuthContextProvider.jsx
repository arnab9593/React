
import { createContext, useState } from "react";

export const AppContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState();

    const handleLogin = (username) => {
        setIsAuth(true);
        setToken(Date.now() + ' ' + username);
    };

    const value = { token, isAuth, handleLogin };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}

export default AuthContextProvider
