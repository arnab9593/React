import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import React from "react";
const Home = () => {
    // const { isAuth, toggleAuth } = React.useContext(AuthContext);

    // if (isAuth) {
    //     return <Navigate to="/users" />;
    // }
    return (
        <div>
            <h3>Home</h3>
            {/* <button onClick={toggleAuth}>LOGIN</button> */}
        </div>
    )
}

export default Home