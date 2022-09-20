import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(true);
    const value = { isAuth };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;