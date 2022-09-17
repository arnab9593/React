
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
    const { toggleAuth } = useContext(AuthContext)
    return (
        <div>
            <h2>Home</h2>
            <button onClick={toggleAuth}>Logout</button>
        </div>

    )
}

export default Home

