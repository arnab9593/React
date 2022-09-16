import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
// import { useContext } from "react";

function PrivateRoute({ children }) {

    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/" />;
    }
    return children;

}
export default PrivateRoute;