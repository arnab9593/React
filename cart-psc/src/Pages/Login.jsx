
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    if (isAuth) {
        return <Navigate to="/" />
    }
    return (
        <>
            <h2>Login</h2>
            <button onClick={toggleAuth}>Login</button>
        </>

    )
}

export default Login

