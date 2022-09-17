import { useContext } from "react";
import { AppContext } from "../Context/AuthContextProvider";

const Status = () => {
    const { isAuth, token } = useContext(AppContext);
    return (
        <div>
            <div>{isAuth ? `token is ${token}` : `Login to generate token`}</div>
        </div>
    )
}

export default Status