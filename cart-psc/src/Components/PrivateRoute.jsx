import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    if (!isAuth) {
        return <Navigate to="/login"></Navigate>
    }
    return children;

}

export default PrivateRoute
